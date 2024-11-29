import { envs } from "../../../config/plugins";
import { WeatherDatasource } from "../../../domain/weather/datasource/weather.datasource";

export class WeatherApiDatasource implements WeatherDatasource {
  constructor() {}

  async get(path: string | null): Promise<any> {
    return fetch(envs.WEATHER_API_URL + path)
      .then((res) => res.json())
      .catch((err) => {
        throw `Error on fetching ${err?.message}`;
      });
  }
}
