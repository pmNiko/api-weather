import { WeatherForecastDTO } from "@domain/weather/dto/weatherForecast.dto";
import { WeatherRepository } from "@domain/weather/repository/weather.repository";

export class GetWeatherHomeUseCase {
  constructor(private weatherRepository: WeatherRepository) {}

  async execute(): Promise<WeatherForecastDTO> {
    return await this.weatherRepository.getHome();
  }
}
