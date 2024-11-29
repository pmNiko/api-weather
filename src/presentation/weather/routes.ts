import { Router } from "express";
import { WeatherController } from "./controller";
import { WeatherApiDatasource } from "@infraestructure/weather/datasource/weather-api.datasource";
import { WeatherApiRepository } from "@infraestructure/weather/repository/weather-api.repository";
import { GetWeatherHomeUseCase } from "@application/weather/use-cases/getWeatherHome.use-case";
import { GetWeatherProvinciasUseCase } from "@application/weather/use-cases/getWeatherProvincias.use-case";
import { WeatherService } from "@application/weather/services/WeatherService";

export class WeatherRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();
    const datasource = new WeatherApiDatasource();
    const repository = new WeatherApiRepository(datasource);
    const getWeatherUseCase = new GetWeatherHomeUseCase(repository);
    const getWeatherProvinceUseCase = new GetWeatherProvinciasUseCase(
      repository
    );
    const weatherServices = new WeatherService(
      getWeatherUseCase,
      getWeatherProvinceUseCase
    );
    const controller = new WeatherController(weatherServices);

    router.get("/home", controller.getWeatherHome);
    router.get("/provincias", controller.getWeatherProvincias);

    return router;
  }
}
