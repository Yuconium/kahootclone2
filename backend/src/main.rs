use rocket::http::Method;
use rocket::serde::{json::Json, Deserialize, Serialize};
use rocket::*;
use rocket_cors::{AllowedOrigins, CorsOptions};

mod data;

use data::Quiz;

#[get("/test")]
fn index() -> Json<data::Quiz> {
    Json(data::Quiz::new())
}

#[get("/")]
fn test() -> &'static str {
    "test"
}

#[launch]
fn rocket() -> _ {
    let cors = CorsOptions::default()
        .allowed_origins(AllowedOrigins::all())
        .allowed_methods(
            vec![Method::Get, Method::Post, Method::Patch]
                .into_iter()
                .map(From::from)
                .collect(),
        )
        .allow_credentials(true);

    rocket::build()
        .attach(cors.to_cors().unwrap())
        .mount("/", routes![index, test])
}
