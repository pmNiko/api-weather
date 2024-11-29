import { WeatherProvinciaDTO } from "@domain/weather/dto/weatherProvincia.dto";
import { WeatherRepository } from "@domain/weather/repository/weather.repository";

export class GetWeatherProvinciasUseCase {
  constructor(private weatherRepository: WeatherRepository) {}

  async execute(): Promise<WeatherProvinciaDTO> {
    return await this.weatherRepository.getProvincias();
  }
}
