import { WeatherForecastDTO } from "../dto/weatherForecast.dto";
import { WeatherProvinciaDTO } from "../dto/weatherProvincia.dto";

export interface WeatherRepository {
  getHome(): Promise<WeatherForecastDTO>;
  getProvincias(): Promise<WeatherProvinciaDTO>;
}
