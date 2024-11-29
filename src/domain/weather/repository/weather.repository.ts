import { WeatherForecastDTO } from "../dto/weatherForecast.dto";

export interface WeatherRepository {
  getHome(): Promise<WeatherForecastDTO>;
  getProvincias(): Promise<any>;
}
