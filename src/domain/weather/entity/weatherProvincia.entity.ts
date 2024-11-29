import { CustomError } from "@helpers/errors/custom-error";
import { Origen, Provincia } from "../interfaces/WeatherProvinciasRespAPI";

export class WeatherProvinciaEntity {
  constructor(
    public readonly title: string,
    public readonly origen: Origen,
    public readonly provincias: Provincia[]
  ) {
    if (!title || !origen || provincias === undefined) {
      throw CustomError.unprocessableEntity("Invalid data for WeatherForecast");
    }
  }
}
