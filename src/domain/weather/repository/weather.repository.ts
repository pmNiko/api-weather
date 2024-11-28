export interface WeatherRepository {
  getHome(): Promise<any>;
  getProvincias(): Promise<any>;
}
