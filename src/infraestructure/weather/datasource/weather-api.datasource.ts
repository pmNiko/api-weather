import { envs } from "../../../config/plugins";
import { CustomError } from "../../../domain/errors/custom-error";
import { WeatherDatasource } from "../../../domain/weather/datasource/weather.datasource";

export class WeatherApiDatasource implements WeatherDatasource {
  constructor() {}

  async get(path: string | null): Promise<any> {
    return fetch(envs.WEATHER_API_URL + path)
      .then((res) => {
        if (res.status === 404) {
          throw CustomError.notFound(
            `${envs.WEATHER_API_URL + path} does not exists`
          );
        }
        return res.json();
      })
      .catch((err) => {
        throw CustomError.gatewayTimeout(`Error on fetching ${err?.message}`);
      });
  }
}
