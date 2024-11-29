import { WeatherForecastDTO } from "../../../domain/weather/dto/weatherForecast.dto";
import { WeatherRepository } from "../../../domain/weather/repository/weather.repository";

export class GetWeatherHomeUseCase {
  constructor(private weatherRepository: WeatherRepository) {}

  async execute(): Promise<WeatherForecastDTO> {
    const rawWeatherData = await this.weatherRepository.getHome();
    return rawWeatherData;
  }
}
