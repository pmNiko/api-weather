import { Router } from "express";
import { WeatherApiRepository } from "../../infraestructure/weather/repository/weather-api.repository";
import { WeatherController } from "./controller";
import { GetWeatherHomeUseCase } from "../../application/weather/use-cases/getWeatherHome.use-case";
import { GetWeatherProvinciasUseCase } from "../../application/weather/use-cases/getWeatherProvincias.use-case";
import { WeatherService } from "../../application/weather/services/WeatherService";

export class WeatherRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();
    const weatherApiRepository = new WeatherApiRepository();
    const getWeatherUseCase = new GetWeatherHomeUseCase(weatherApiRepository);
    const getWeatherProvinceUseCase = new GetWeatherProvinciasUseCase(
      weatherApiRepository
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
