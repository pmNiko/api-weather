import { WeatherForecastEntity } from "../entity/weatherForecast.entity";

export interface WeatherRepository {
  getHome(): Promise<WeatherForecastEntity>;
  getProvincias(): Promise<any>;
}
