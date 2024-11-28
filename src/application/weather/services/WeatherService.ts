import { GetWeatherHomeUseCase } from "../use-cases/getWeatherHome.use-case";
import { GetWeatherProvinciasUseCase } from "../use-cases/getWeatherProvincias.use-case";

export class WeatherService {
  constructor(
    private getWeatherHomeUseCase: GetWeatherHomeUseCase,
    private getWeatherProvinciasUseCase: GetWeatherProvinciasUseCase
  ) {}

  async getHome() {
    return this.getWeatherHomeUseCase.execute();
  }

  async getProvincias() {
    return this.getWeatherProvinciasUseCase.execute();
  }
}
