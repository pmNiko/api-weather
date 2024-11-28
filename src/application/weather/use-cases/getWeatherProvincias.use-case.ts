import { WeatherEntity } from "../../../domain/weather/entity/weather.entity";
import { WeatherRepository } from "../../../domain/weather/repository/weather.repository";

export class GetWeatherProvinciasUseCase {
  constructor(private weatherRepository: WeatherRepository) {}

  async execute(): Promise<WeatherEntity> {
    const rawWeatherData = await this.weatherRepository.getProvincias();
    return rawWeatherData;
  }
}
