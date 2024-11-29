import { WeatherRepository } from "@domain/weather/repository/weather.repository";
import { WeatherDatasource } from "@domain/weather/datasource/weather.datasource";
import { WeatherForecastEntity } from "@domain/weather/entity/weatherForecast.entity";
import { WeatherForecastDTO } from "@domain/weather/dto/weatherForecast.dto";
import { WeatherForecastRespAPI } from "@domain/weather/interfaces/WeatherForecastRespAPI";
import { WeatherProvinciaRespAPI } from "@domain/weather/interfaces/WeatherProvinciasRespAPI";
import { WeatherProvinciaDTO } from "@domain/weather/dto/weatherProvincia.dto";
import { WeatherProvinciaEntity } from "@domain/weather/entity/weatherProvincia.entity";

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

  async getProvincias(): Promise<WeatherProvinciaDTO> {
    const resp = await this.datasource.get<WeatherProvinciaRespAPI>(
      "/provincias"
    );

    const { title, origen, provincias } = resp;

    const entity = new WeatherProvinciaEntity(title, origen, provincias);

    return WeatherProvinciaDTO.fromEntity(entity);
  }
}
