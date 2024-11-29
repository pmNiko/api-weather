import { WeatherRepository } from "@domain/weather/repository/weather.repository";
import { WeatherForecastRespAPI } from "@domain/weather/interfaces";
import { WeatherDatasource } from "@domain/weather/datasource/weather.datasource";
import { WeatherForecastEntity } from "@domain/weather/entity/weatherForecast.entity";
import { WeatherForecastDTO } from "@domain/weather/dto/weatherForecast.dto";
import { WeatherEntity } from "@domain/weather/entity/weather.entity";

export class WeatherApiRepository implements WeatherRepository {
  constructor(private readonly datasource: WeatherDatasource) {}

  async getHome(): Promise<WeatherForecastDTO> {
    const resp = await this.datasource.get<WeatherForecastRespAPI>("/home");

    const { title, origen, today, tomorrow, ciudades, provincias } = resp;

    const entity = new WeatherForecastEntity(
      title,
      origen,
      today,
      tomorrow,
      ciudades,
      provincias
    );

    return WeatherForecastDTO.fromEntity(entity);
  }

  async getProvincias(): Promise<any> {
    const data = await this.datasource.get("/provincias");
    return new WeatherEntity(data);
  }
}
