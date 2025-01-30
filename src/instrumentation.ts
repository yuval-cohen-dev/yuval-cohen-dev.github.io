import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    return;
  }
  const provider = new WebTracerProvider({
    spanProcessors: [new BatchSpanProcessor(new ConsoleSpanExporter())],
  });
  provider.register();
}
