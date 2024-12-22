mod proto {
    tonic::include_proto!("calculator");
}

use tonic::{Request, Response, Status};

use proto::{calculator_server::Calculator, CalculationRequest, CalculationResponse};

pub use proto::calculator_server::CalculatorServer;

pub struct CalculatorService;

#[tonic::async_trait]
impl Calculator for CalculatorService {
    async fn divide(
        &self,
        request: Request<CalculationRequest>,
    ) -> Result<Response<CalculationResponse>, Status> {
        let input = request.get_ref();

        if input.b == 0 {
            return Err(Status::invalid_argument("Cannot divide by zero"));
        }

        let response = CalculationResponse {
            result: input.a / input.b,
        };

        Ok(Response::new(response))
    }
}
