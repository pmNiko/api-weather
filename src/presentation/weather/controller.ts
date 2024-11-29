import { Request, Response } from "express";
import { WeatherService } from "../../application/weather/services/WeatherService";
import { hanldeError } from "../../domain/errors/handleError";

export class WeatherController {
  constructor(private readonly weatherServices: WeatherService) {}

  public getWeatherHome = (req: Request, res: Response) => {
    this.weatherServices
      .getHome()
      .then((data) => res.json(data))
      .catch((err) => hanldeError(res, err));
  };

  public getWeatherProvincias = (req: Request, res: Response) => {
    this.weatherServices
      .getProvincias()
      .then((data) => res.json(data))
      .catch((err) => hanldeError(res, err));
  };
}
