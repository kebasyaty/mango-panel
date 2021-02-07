//! # Admin
//! Service/Subapplication for administration.
//!

use actix_files::NamedFile;
use actix_web::{web, Result};

use crate::settings;
pub use configure_urls::*;
pub use request_handlers::*;

// CONFIGURE URLs
// #################################################################################################
pub mod configure_urls {
    use super::*;

    pub fn config(cfg: &mut web::ServiceConfig) {
        cfg.service(web::resource("/panel").route(web::get().to(admin_panel)));
    }
}

// REQUEST HANDLERS
// #################################################################################################
pub mod request_handlers {
    use super::*;

    // Admin panel
    // *********************************************************************************************
    pub async fn admin_panel(app_state: web::Data<settings::AppState>) -> Result<NamedFile> {
        let path = app_state.get_template("sitemap.xml");
        Ok(NamedFile::open(path)?)
    }
}
