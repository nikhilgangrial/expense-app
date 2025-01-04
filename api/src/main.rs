use std::error::Error;

use tonic::transport::Server;
use tracing::Level;

mod services;

mod proto {
    pub const PROTO_DESCRIPTOR: &[u8] = tonic::include_file_descriptor_set!("proto_descriptor");
}

use proto::PROTO_DESCRIPTOR;
use services::calculator::{CalculatorServer, CalculatorService};

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let tracing_subscriber = tracing_subscriber::FmtSubscriber::builder()
        .with_max_level(Level::INFO)
        .finish();
    tracing::subscriber::set_global_default(tracing_subscriber)
        .expect("setting default subscriber failed");

    let addr = "[::1]:50069".parse()?;

    let calc = CalculatorService {};

    let reflection_service = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(PROTO_DESCRIPTOR)
        .build_v1()?;

    Server::builder()
        .add_service(reflection_service)
        .add_service(CalculatorServer::new(calc))
        .serve(addr)
        .await?;

    Ok(())
}
