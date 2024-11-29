import { WeatherForecastEntity } from "../entity/weatherForecast.entity";
import { Ciudades, Provincia } from "../interfaces/WeatherForecastRespAPI";

export class WeatherForecastDTO {
  constructor(
    public sourceTitle: string,
    public description: string,
    public today: string,
    public tomorrow: string,
    public ciudades: Ciudades[],
    public provincias: Provincia[]
  ) {}

  static fromEntity(entity: WeatherForecastEntity): WeatherForecastDTO {
    const { title, origen, today, tomorrow, ciudades, provincias } = entity;

    return new WeatherForecastDTO(
      title,
      origen.descripcion,
      today.p![0],
      tomorrow.p![0],
      ciudades,
      provincias
    );
  }
}
