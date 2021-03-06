//! # Admin
//! Service (Subapplication) for administration.
//!

use actix_files::Files;
use actix_files::NamedFile;
use actix_session::Session;
use actix_web::{error, web, Error, HttpResponse, Result};

use futures::StreamExt;
use humansize::{file_size_opts, FileSize};
use mongodb::{
    bson::{doc, document::Document, Bson, Regex},
    options::FindOptions,
};
use serde::Deserialize;
use serde_json::{json, Value};

use crate::models::{
    registration::{admin_panel, ckeditor},
    services::admin::users,
};
use mango_orm::{QCommon, QPaladins, ToModel, FORM_STORE, MONGODB_CLIENT_STORE};

pub use configure_urls::*;
pub use request_handlers::*;

use crate::settings;
use crate::settings::general::MAX_UPLOAD_SIZE;

const BRAND: &str = "Сompany Name";
const SLOGAN: &str = "Brief description of the company.";
// CKEditor supported languages:
// af | ar | ast | az | bg | ca | cs | da | de | de-ch | el | en-au |
// en-gb | eo | es | et | eu | fa | fi | fr | gl | gu | he | hi |
// hr | hu | id | it | ja | km | kn | ko | ku | lt | lv | ms |
// nb | ne | nl | no | oc | pl | pt | pt-br | ro | ru | si | sk |
// sl | sq | sr | sr-latn | sv | th | tk | tr | tt | ug | uk | vi |
// zh | zh-cn
const LANGUAGE_CODE: &str = "en";

fn admin_file_path(inner_path: &str) -> String {
    format!("./admin/{}", inner_path)
}

// CONFIGURE URLs
// #################################################################################################
pub mod configure_urls {
    use super::*;

    pub fn config(cfg: &mut web::ServiceConfig) {
        cfg.service(Files::new("/contrib", "./admin"));
        cfg.service(web::resource("/login").route(web::post().to(login)));
        cfg.service(web::resource("/logout").route(web::post().to(logout)));
        cfg.service(web::resource("/sign-in").route(web::get().to(admin_panel)));
        cfg.service(web::resource("/service-list").route(web::post().to(service_list)));
        cfg.service(web::resource("/document-list").route(web::post().to(document_list)));
        cfg.service(web::resource("/get-document").route(web::post().to(get_document)));
        cfg.service(
            web::resource("/{model_key}/save-document").route(web::post().to(save_document)),
        );
        cfg.service(web::resource("/delete-document").route(web::post().to(delete_document)));
        cfg.service(web::resource("/delete-many-doc").route(web::post().to(delete_many_doc)));
        cfg.service(web::resource("/update-dyn-data").route(web::post().to(update_dyn_data)));
        cfg.service(web::resource("/update-password").route(web::post().to(update_password)));
        cfg.service(web::resource("/*").route(web::get().to(admin_panel)));
        cfg.service(web::resource("").route(web::get().to(admin_panel)));
    }
}

// REQUEST HANDLERS
// #################################################################################################
pub mod request_handlers {
    use super::*;

    // Admin panel
    // *********************************************************************************************
    pub async fn admin_panel(session: Session) -> Result<NamedFile, Error> {
        // Access request identity
        if session.get::<String>("user")?.is_none() {
            // Create first user (administrator)
            if users::AdminProfile::estimated_document_count(None).unwrap() == 0_i64 {
                let mut first_user = users::AdminProfile {
                    // Valid characters: a-z A-Z 0-9 _ @ + .
                    // Max size: 150
                    username: Some("admin".into()),
                    email: Some("no_reply@email.net".into()),
                    // Valid characters: a-z A-Z 0-9 @ # $ % ^ & + = * ! ~ ) (
                    // Min size: 8
                    password: Some("12345678".into()),
                    confirm_password: Some("12345678".into()),
                    is_staff: Some(true),
                    is_active: Some(true),
                    ..Default::default()
                };
                let result = first_user.save(None, None).unwrap();
                if !result.is_valid() {
                    panic!(
                        "Model: `User` : Error while creating the first user. In detail: {}.",
                        result.hash().unwrap()
                    )
                }
            }
        }
        // Get path to admin page
        let path = admin_file_path("index.html");
        // Return response
        Ok(NamedFile::open(path)?)
    }

    // Login
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct LoginForm {
        username: String,
        password: String,
    }

    pub async fn login(
        session: Session,
        login_form: web::Json<LoginForm>,
    ) -> Result<HttpResponse, Error> {
        //
        let username: String;
        let mut is_authenticated = false;
        let mut msg_err = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if let Some(user) = session.get::<String>("user")? {
            if user == login_form.username && session.get::<bool>("is_active")?.unwrap() {
                username = user;
                is_authenticated = true;
            } else {
                username = login_form.username.clone();
                msg_err = "Authentication failed.".to_string();
            }
        } else {
            username = login_form.username.clone();
            let password = login_form.password.clone();
            let filter =
                Some(doc! {"username": username.clone(), "is_staff": true, "is_active": true});
            // Search for a user in the database
            let output_data = users::AdminProfile::find_one(filter, None).unwrap();
            // Check search result
            if output_data.is_valid() {
                // Get an instance of a User model
                let user = output_data.model::<users::AdminProfile>().unwrap();
                // Check password
                if user.verify_password(password.as_str(), None).unwrap() {
                    // Add user identity to session
                    session.set("user", user.username.clone())?; // Set `id user`
                    session.set("hash", user.hash.clone())?; // Set `hash`
                    session.set("is_active", user.is_staff.clone())?; // Set `is active`
                    session.set("is_staff", user.is_staff.clone())?; // Set `is staff`
                    is_authenticated = true;
                } else {
                    msg_err = "Authentication failed.".to_string();
                }
            }
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!( {
                "username": username,
                "is_authenticated": is_authenticated,
                "msg_err": msg_err
            })))
    }

    // Logout
    // *********************************************************************************************
    pub async fn logout(session: Session) -> Result<HttpResponse, Error> {
        // Clear session
        if session.get::<String>("user")?.is_some() {
            session.clear();
        }
        // Return json response
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!( {
                "msg": "Goodbye!"
            })))
    }

    // Get service list
    // *********************************************************************************************
    pub async fn service_list(session: Session) -> Result<HttpResponse, Error> {
        let mut is_authenticated = false;
        let mut msg_err = String::new();
        // Access request identity
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }
        // Return json response
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                "is_authenticated": is_authenticated,
                "brand": BRAND,
                "slogan": SLOGAN,
                "language_code": LANGUAGE_CODE,
                "service_list": admin_panel::service_list(),
                "config_ckeditor": ckeditor::config_ckeditor("default"),
                "msg_err": msg_err
            })))
    }

    // Get document list
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QueryGetDocList {
        model_key: String,
        fields_name: Vec<String>,
        page_num: u32,
        search_query: String,
        limit: u32,
        sort: String,
        direct: i32,
    }

    pub async fn document_list(
        session: Session,
        query: web::Json<QueryGetDocList>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();
        let mut documents: Vec<Value> = Vec::new();
        let mut page_count: u32 = 1;

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Get document list
        // -----------------------------------------------------------------------------------------
        if msg_err.is_empty() {
            // Get read access from cache
            // -------------------------------------------------------------------------------------
            let form_store = FORM_STORE.read().unwrap();
            let form_cache = form_store.get(query.model_key.as_str()).unwrap();
            let meta = &form_cache.meta;
            let map_widget_type = &meta.map_widget_type;

            // Define filter and options for database query
            // -------------------------------------------------------------------------------------
            // Query filter
            let mut filter = None;
            if !query.search_query.is_empty() {
                let search_pattern = &Bson::RegularExpression(Regex {
                    pattern: query.search_query.clone(),
                    options: "im".to_string(),
                });
                let mut vec_doc: Vec<Document> = Vec::new();
                for field_name in query.fields_name.iter() {
                    match map_widget_type.get(field_name).unwrap().as_str() {
                        "inputEmail" | "radioText" | "inputPhone" | "inputText" | "inputUrl"
                        | "inputColor" | "inputIP" | "inputIPv4" | "inputIPv6" | "selectText"
                        | "selectTextDyn" | "hiddenText" => {
                            vec_doc.push(doc! {field_name: search_pattern});
                        }
                        _ => {}
                    }
                }
                filter = Some(doc! {"$or": vec_doc});
            }
            // Query options
            let limit = i64::from(query.limit);
            let skip = limit * i64::from(query.page_num - 1_u32);
            let sort = match query.sort.as_str() {
                "alphabetical_links" => {
                    doc! {query.fields_name[0].as_str(): query.direct}
                }
                "created" => doc! {"created_at": query.direct},
                "updated" => doc! {"updated_at": query.direct},
                _ => {
                    let msg = "Sorting Documents - There is no match for the sort type.";
                    return Err(error::ErrorBadRequest(msg));
                }
            };
            let mut projection = doc! {"created_at": 1, "updated_at": 1};
            for field_name in query.fields_name.iter() {
                projection.insert(field_name, 1);
            }
            let options = Some(
                FindOptions::builder()
                    .skip(skip)
                    .limit(limit)
                    .projection(Some(projection))
                    .sort(Some(sort))
                    .build(),
            );

            // Get MongoDB client
            // -------------------------------------------------------------------------------------
            let client_store = MONGODB_CLIENT_STORE.read().unwrap();
            let client: &mongodb::sync::Client =
                client_store.get(meta.db_client_name.as_str()).unwrap();

            // Accessing the collection
            // -------------------------------------------------------------------------------------
            let coll = client
                .database(meta.database_name.as_str())
                .collection(meta.collection_name.as_str());

            // Get the number of pages
            // -------------------------------------------------------------------------------------
            page_count = (coll.count_documents(filter.clone(), None).unwrap() as f64
                / query.limit as f64)
                .ceil() as u32;
            // Get cursor for selecting documents.
            let mut cursor = coll.find(filter, options).unwrap();

            // Selecting documents
            // -------------------------------------------------------------------------------------
            let re_find_color = regex::RegexBuilder::new(
                r"(?P<color>(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})\b|(?:rgb|hsl)a?\([^\)]*\))",)
                .case_insensitive(true).build().unwrap();
            //
            while let Some(doc) = cursor.next() {
                let doc = doc.unwrap();
                // Filling in the `documents` array
                let mut tmp_doc = doc! {
                    "hash": Bson::String(doc.get_object_id("_id").unwrap().to_hex()),
                    "created_at":
                        Bson::String(doc.get_datetime("created_at").unwrap().to_rfc3339()[..16].to_string()),
                    "updated_at":
                        Bson::String(doc.get_datetime("updated_at").unwrap().to_rfc3339()[..16].to_string())
                };
                for field_name in query.fields_name.iter() {
                    match map_widget_type.get(field_name).unwrap().as_str() {
                        "inputEmail" | "radioText" | "inputPhone" | "inputText" | "inputUrl"
                        | "inputIP" | "inputIPv4" | "inputIPv6" | "selectText"
                        | "selectTextDyn" | "hiddenText" => {
                            tmp_doc.insert(
                                field_name,
                                doc.get_str(field_name).unwrap_or("").to_string(),
                            );
                        }
                        "inputColor" => {
                            let color = doc.get_str(field_name).unwrap_or("").to_string();
                            let html = format!(
                                r#"<div class="show-color" style="background-color:{};"></div>"#,
                                color
                            );
                            tmp_doc.insert(field_name, html);
                        }
                        "numberI32" | "radioI32" | "rangeI32" | "selectI32" | "selectI32Dyn"
                        | "hiddenI32" => {
                            let num = doc.get_i32(field_name);
                            tmp_doc.insert(
                                field_name,
                                if num.is_ok() {
                                    num.unwrap().to_string()
                                } else {
                                    String::new()
                                },
                            );
                        }
                        "numberU32" | "numberI64" | "radioU32" | "radioI64" | "rangeU32"
                        | "rangeI64" | "selectU32" | "selectI64" | "selectU32Dyn"
                        | "selectI64Dyn" | "hiddenU32" | "hiddenI64" => {
                            let num = doc.get_i64(field_name);
                            tmp_doc.insert(
                                field_name,
                                if num.is_ok() {
                                    num.unwrap().to_string()
                                } else {
                                    String::new()
                                },
                            );
                        }
                        "numberF64" | "radioF64" | "rangeF64" | "selectF64" | "selectF64Dyn"
                        | "hiddenF64" => {
                            let num = doc.get_f64(field_name);
                            tmp_doc.insert(
                                field_name,
                                if num.is_ok() {
                                    num.unwrap().to_string()
                                } else {
                                    String::new()
                                },
                            );
                        }
                        "selectTextMult" | "selectTextMultDyn" | "selectI32Mult"
                        | "selectI32MultDyn" | "selectU32Mult" | "selectU32MultDyn"
                        | "selectI64Mult" | "selectI64MultDyn" | "selectF64Mult"
                        | "selectF64MultDyn" => {
                            let empty_arr: Vec<Bson> = Vec::new();
                            let arr = doc.get_array(field_name).unwrap_or(&empty_arr);
                            let result = serde_json::to_string(arr).unwrap();
                            let result = result[1..result.len() - 1]
                                .to_string()
                                .replace(r#"""#, "")
                                .replace(",", " ; ");
                            let result = re_find_color.replace_all(
                                result.as_str(),
                                r#"<div class="sm-show-color" style="background-color:$color;"></div>"#,
                            );
                            tmp_doc.insert(field_name, result.to_string());
                        }
                        "inputImage" => {
                            tmp_doc.insert(
                                field_name,
                                if let Ok(img_bson) = doc.get_document(field_name) {
                                        let urls: [&str; 5] = ["url_xs", "url_sm", "url_md", "url_lg", "url"];
                                        let mut img_url: &str = "";
                                        for url in urls.iter() {
                                            if let Ok(img) = img_bson.get_str(url) {
                                                img_url = img;
                                                break;
                                            }
                                        }
                                        if !img_url.is_empty() {
                                            format!(
                                                r#"<img class="rounded-lg mt-1" src="{}" height="60" alt="Image">"#,
                                                img_url
                                            )
                                        } else {
                                            String::new()
                                        }
                                } else {
                                    String::new()
                                }
                            );
                        }
                        "checkBox" => {
                            let bool_val = doc.get_bool(field_name).unwrap_or(false);
                            let icon_name = if bool_val {
                                "checkbox-marked-outline"
                            } else {
                                "checkbox-blank-outline"
                            };
                            tmp_doc.insert(
                                field_name,
                                format!(r#"<span class="mdi mdi-18px mdi-{}"></span>"#, icon_name),
                            );
                        }
                        _ => {
                            let msg = format!(
                                "admin_panel/service_list() > Field: `{}` : Invalid data type.",
                                field_name
                            );
                            return Err(error::ErrorBadRequest(msg));
                        }
                    }
                }
                documents.push(serde_json::to_value(tmp_doc).unwrap());
            }
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                "documents": documents,
                "page_count": page_count,
                "is_authenticated": is_authenticated,
                "msg_err": msg_err
            })))
    }

    // Get document
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QueryGetDoc {
        model_key: String,
        doc_hash: String,
    }

    pub async fn get_document(
        session: Session,
        query: web::Json<QueryGetDoc>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();
        let model_key = query.model_key.clone();
        let doc_hash = query.doc_hash.clone();
        let mut document = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Define the desired model by `model_key` and
        // get an instance of the model in json format (for the administrator)
        if msg_err.is_empty() {
            document = admin_panel::get_document_reg(model_key.as_str(), doc_hash.as_str()).unwrap()
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                "document": document,
                "is_authenticated": is_authenticated,
                "msg_err": msg_err,
                "max_size": MAX_UPLOAD_SIZE
            })))
    }

    // Save/update document
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QuerySaveDoc {
        model_key: String,
    }

    pub async fn save_document(
        session: Session,
        mut payload: web::Payload,
        path: web::Path<QuerySaveDoc>,
        app_state: web::Data<settings::AppState>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();
        let mut document = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Load the request body
        // -----------------------------------------------------------------------------------------
        let mut bytes = web::BytesMut::new();
        while let Some(chunk) = payload.next().await {
            let chunk = chunk?;
            if (bytes.len() + chunk.len()) > MAX_UPLOAD_SIZE {
                msg_err = format!(
                    "The total size of the form data exceeds the {} limit.",
                    MAX_UPLOAD_SIZE.file_size(file_size_opts::BINARY).unwrap()
                );
            }
            bytes.extend_from_slice(&chunk);
        }

        // Define the desired model with `model_key` and save/update in the database
        if msg_err.is_empty() {
            document =
                admin_panel::save_document_reg(path.model_key.as_str(), &bytes, app_state).unwrap()
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                "is_authenticated": is_authenticated,
                "msg_err": msg_err,
                "document": document,
            })))
    }

    // Delete document
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QueryDeleteDoc {
        model_key: String,
        doc_hash: String,
    }

    pub async fn delete_document(
        session: Session,
        query: web::Json<QueryDeleteDoc>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Get read access from cache
        // -----------------------------------------------------------------------------------------
        if msg_err.is_empty() {
            let form_store = FORM_STORE.read().unwrap();
            let form_cache = form_store.get(query.model_key.as_str()).unwrap();
            let meta = &form_cache.meta;
            if meta.is_del_docs {
                // Create a filter for a database query
                let object_id =
                    mongodb::bson::oid::ObjectId::with_string(query.doc_hash.as_str()).unwrap();
                let filter = doc! {"_id": object_id};

                msg_err =
                    admin_panel::delete_document_reg(query.model_key.as_str(), filter).unwrap();
            } else {
                msg_err = "It is forbidden to perform delete.".to_string();
            }
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                    "is_authenticated": is_authenticated,
                    "msg_err": msg_err
            })))
    }

    // Delete document
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QueryDeleteManyDoc {
        model_key: String,
        doc_hash_list: Vec<String>,
    }

    pub async fn delete_many_doc(
        session: Session,
        query: web::Json<QueryDeleteManyDoc>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Get read access from cache
        // -----------------------------------------------------------------------------------------
        if msg_err.is_empty() {
            let form_store = FORM_STORE.read().unwrap();
            let form_cache = form_store.get(query.model_key.as_str()).unwrap();
            let meta = &form_cache.meta;
            //
            let model_key = query.model_key.as_str();
            //
            if meta.is_del_docs {
                for hash in query.doc_hash_list.iter() {
                    // Create a filter for a database query
                    let object_id =
                        mongodb::bson::oid::ObjectId::with_string(hash.as_str()).unwrap();
                    let filter = doc! {"_id": object_id};

                    msg_err = admin_panel::delete_document_reg(model_key, filter).unwrap();
                    if !msg_err.is_empty() {
                        break;
                    }
                }
            } else {
                msg_err = "It is forbidden to perform delete.".to_string();
            }
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                    "is_authenticated": is_authenticated,
                    "msg_err": msg_err
            })))
    }

    // Refresh data for dynamic widgets
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QueryUpdateDynData {
        model_key: String,
        json_options: String,
    }

    pub async fn update_dyn_data(
        session: Session,
        query: web::Json<QueryUpdateDynData>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Define the desired model by `model_key` and update dynamic data
        // -----------------------------------------------------------------------------------------
        if msg_err.is_empty() {
            admin_panel::update_dyn_data_reg(query.model_key.as_str(), query.json_options.as_str())
                .unwrap();
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                "is_authenticated": is_authenticated,
                "msg_err": msg_err
            })))
    }

    // Update password
    // *********************************************************************************************
    #[derive(Deserialize)]
    pub struct QueryUpdatePassword {
        old_pass: String,
        new_pass: String,
        model_key: String,
        doc_hash: String,
    }

    pub async fn update_password(
        session: Session,
        query: web::Json<QueryUpdatePassword>,
    ) -> Result<HttpResponse, Error> {
        //
        let mut is_authenticated = false;
        let mut msg_err = String::new();

        // Access request identity
        // -----------------------------------------------------------------------------------------
        if session.get::<String>("user")?.is_some()
            && session.get::<String>("hash")?.is_some()
            && session.get::<bool>("is_active")?.unwrap()
            && session.get::<bool>("is_staff")?.unwrap()
        {
            is_authenticated = true;
        } else {
            msg_err = "Authentication failed.".to_string();
        }

        // Update password
        if query.model_key == users::AdminProfile::key() {
            if !query.doc_hash.is_empty() {
                let object_id = users::AdminProfile::hash_to_id(query.doc_hash.as_str()).unwrap();
                let filter = doc! {"_id": object_id};
                let output_data = users::AdminProfile::find_one(Some(filter), None).unwrap();
                if output_data.is_valid() {
                    if let Ok(instance) = output_data.model::<users::AdminProfile>() {
                        if !instance
                            .update_password(
                                query.old_pass.as_str(),
                                query.new_pass.as_str(),
                                None,
                                None,
                            )
                            .unwrap()
                        {
                            msg_err =
                                "Sorry, your password has not been updated. Try again.".to_string();
                        }
                    } else {
                        return Err(error::ErrorBadRequest("No model instance was received."));
                    }
                } else {
                    return Err(error::ErrorBadRequest("User is not found."));
                }
            } else {
                return Err(error::ErrorBadRequest("Missing document hash."));
            }
        } else {
            return Err(error::ErrorBadRequest("The model key does not match."));
        }

        // Return json response
        // -----------------------------------------------------------------------------------------
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .json(json!({
                "is_authenticated": is_authenticated,
                "msg_err": msg_err
            })))
    }
}
