import { CustomError } from "../../errors/custom-error";
import { Ciudades, Origen, Provincia, Today } from "../interfaces";

export class WeatherForecastEntity {
  constructor(
    public readonly title: string,
    public readonly origen: Origen,
    public readonly today: Today,
    public readonly tomorrow: Today,
    public readonly ciudades: Ciudades[],
    public readonly provincias: Provincia[]
  ) {
    if (
      !title ||
      !origen ||
      !today ||
      !tomorrow ||
      ciudades === undefined ||
      provincias === undefined
    ) {
      throw CustomError.unprocessableEntity("Invalid data for WeatherForecast");
    }
  }
}
