import { WeatherDatasource } from "../../../domain/weather/datasource/weather.datasource";
import { WeatherEntity } from "../../../domain/weather/entity/weather.entity";
import { WeatherRepository } from "../../../domain/weather/repository/weather.repository";

export class WeatherApiRepository implements WeatherRepository {
  constructor(private readonly datasource: WeatherDatasource) {}

  async getHome(): Promise<any> {
    const data = await this.datasource.get("/home");
    return new WeatherEntity(data);
  }

  async getProvincias(): Promise<any> {
    const data = await this.datasource.get("/provincias");
    return new WeatherEntity(data);
  }
}
