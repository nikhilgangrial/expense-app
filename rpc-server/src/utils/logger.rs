use std::env;
use std::error::Error;
use tracing::Level;
use tracing_subscriber::layer::SubscriberExt;

fn get_log_level() -> Level {
    let log_level = env::var("LOG_LEVEL").unwrap_or(String::new());

    match log_level.as_str() {
        "trace" => Level::TRACE,
        "debug" => Level::DEBUG,
        "info" => Level::INFO,
        "warn" => Level::WARN,
        "error" => Level::ERROR,
        _ => Level::INFO,
    }
}

pub fn setup() -> Result<(), Box<dyn Error>> {
    let subscriber = tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::layer())
        .with(
            tracing_subscriber::filter::Targets::new().with_target("expense_app", get_log_level()),
        );
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");

    Ok(())
}
