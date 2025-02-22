mod proto {
    tonic::include_proto!("calculator");
}

use tonic::{Request, Response, Status};
use tracing::{debug, info};

use proto::{calculator_server::Calculator, CalculationRequest, CalculationResponse};

pub use proto::calculator_server::CalculatorServer;

#[derive(Debug)]
pub struct CalculatorService;

#[tonic::async_trait]
impl Calculator for CalculatorService {
    #[tracing::instrument(skip_all)]
    async fn divide(
        &self,
        request: Request<CalculationRequest>,
    ) -> Result<Response<CalculationResponse>, Status> {
        info!("received request {:?}", request);
        let input = request.get_ref();

        if input.b == 0 {
            debug!("Division by zero");
            return Err(Status::invalid_argument("Cannot divide by zero"));
        }

        let response = CalculationResponse {
            result: input.a / input.b,
        };

        info!("returning response {:?}", response);
        Ok(Response::new(response))
    }
}
