import { Router } from "express";
import { WeatherRoutes } from "./weather/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/weather", WeatherRoutes.routes);

    return router;
  }
}
