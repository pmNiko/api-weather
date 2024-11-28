import { envs } from "../../../config/plugins";

export class WeatherApiDatasource {
  constructor() {}

  async get(path: string | null): Promise<any> {
    return fetch(envs.WEATHER_API_URL + path)
      .then((res) => res.json())
      .catch((err) => {
        throw `Error on fetching ${err?.message}`;
      });
  }
}
