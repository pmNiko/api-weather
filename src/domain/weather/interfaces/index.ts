export interface WeatherForecastRespAPI {
  origen: Origen;
  title: string;
  ciudades: Ciudades[];
  today: Today;
  tomorrow: Today;
  provincias: Provincia[];
  breadcrumb: any[];
  metadescripcion: string;
  keywords: string;
}

export interface Ciudades {
  id: string;
  idProvince: string;
  name: string;
  nameProvince: string;
  stateSky: StateSky;
  temperatures: Temperatures;
}

export interface StateSky {
  description: Description;
  id: string;
}

export enum Description {
  Despejado = "Despejado",
  NubesAltas = "Nubes altas",
  PocoNuboso = "Poco nuboso",
}

export interface Temperatures {
  max: string;
  min: string;
}

export interface Origen {
  productor: string;
  web: string;
  language: string;
  copyright: string;
  nota_legal: string;
  descripcion: string;
}

export interface Provincia {
  CODPROV: string;
  NOMBRE_PROVINCIA: string;
  CODAUTON: string;
  COMUNIDAD_CIUDAD_AUTONOMA: string;
  CAPITAL_PROVINCIA: string;
}

export interface Today {
  p: string[];
}
