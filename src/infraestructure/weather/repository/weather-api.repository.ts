import { WeatherEntity } from "../../../domain/weather/entity/weather.entity";
import { WeatherRepository } from "../../../domain/weather/repository/weather.repository";
import { WeatherApiDatasource } from "../datasource/weather-api.datasource";

export class WeatherApiRepository implements WeatherRepository {
  constructor(private readonly datasource = new WeatherApiDatasource()) {}

  async getHome(): Promise<any> {
    const data = await this.datasource.get("/home");
    return new WeatherEntity(data);
  }

  async getProvincias(): Promise<any> {
    const data = await this.datasource.get("/provincias");
    return new WeatherEntity(data);
  }
}
