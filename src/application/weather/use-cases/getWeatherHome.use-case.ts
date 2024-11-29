import { WeatherForecastEntity } from "../../../domain/weather/entity/weatherForecast.entity";
import { WeatherRepository } from "../../../domain/weather/repository/weather.repository";

export class GetWeatherHomeUseCase {
  constructor(private weatherRepository: WeatherRepository) {}

  async execute(): Promise<WeatherForecastEntity> {
    const rawWeatherData = await this.weatherRepository.getHome();
    return rawWeatherData;
  }
}
