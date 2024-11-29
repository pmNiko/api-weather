import { envs } from "@config/plugins";
import { WeatherDatasource } from "@domain/weather/datasource/weather.datasource";
import { CustomError } from "@helpers/errors/custom-error";

export class WeatherApiDatasource implements WeatherDatasource {
  constructor() {}

  async get<T = any>(path: string | null): Promise<T> {
    return fetch(envs.WEATHER_API_URL + path)
      .then((res) => {
        if (res.status === 404) {
          throw CustomError.notFound(
            `${envs.WEATHER_API_URL + path} does not exist`
          );
        }
        return res.json() as Promise<T>;
      })
      .catch((err) => {
        throw CustomError.gatewayTimeout(`Error on fetching ${err?.message}`);
      });
  }
}
