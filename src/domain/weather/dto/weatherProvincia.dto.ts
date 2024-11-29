import { WeatherProvinciaEntity } from "../entity/weatherProvincia.entity";
import { Provincia } from "../interfaces/WeatherForecastRespAPI";

export class WeatherProvinciaDTO {
  constructor(
    public sourceTitle: string,
    public description: string,
    public provincias: Provincia[],
    public countProvincias: number
  ) {}

  static fromEntity(entity: WeatherProvinciaEntity): WeatherProvinciaDTO {
    const { title, origen, provincias } = entity;

    return new WeatherProvinciaDTO(
      title,
      origen.descripcion,
      provincias,
      provincias.length
    );
  }
}
