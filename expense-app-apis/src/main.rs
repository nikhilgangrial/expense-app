use std::error::Error;

use tonic::transport::Server;

mod services;

use services::calculator::{CalculatorServer, CalculatorService, CALC_DESCRIPTOR};

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let addr = "[::1]:50069".parse()?;

    let calc = CalculatorService {};

    let reflection_service = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(CALC_DESCRIPTOR)
        .build_v1()?;

    Server::builder()
        .add_service(reflection_service)
        .add_service(CalculatorServer::new(calc))
        .serve(addr)
        .await?;

    Ok(())
}
