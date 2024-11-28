import "dotenv/config";
import * as env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  WEATHER_API_URL: env.get("WEATHER_API_URL").required().asString(),
};
