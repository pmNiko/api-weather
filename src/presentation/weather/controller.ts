import { Request, Response } from "express";
import { WeatherHomeUseCase } from "../../application/use-cases/weather/weather.use-case";

export class WeatherController {
  constructor(private readonly weatherUseCase: WeatherHomeUseCase) {}

  public weatherHome = (req: Request, res: Response) => {
    this.weatherUseCase
      .execute()
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  };
}
