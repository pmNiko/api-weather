import { Router } from "express";
import { WeatherApiRepository } from "../../infraestructure/weather/repository/weather-api.repository";
import { WeatherController } from "./controller";
import { WeatherHomeUseCase } from "../../application/use-cases/weather/weather.use-case";

export class WeatherRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();
    const weatherApiRepository = new WeatherApiRepository();
    const weatherHomeUseCase = new WeatherHomeUseCase(weatherApiRepository);
    const controller = new WeatherController(weatherHomeUseCase);

    router.get("/home", controller.weatherHome);

    return router;
  }
}
