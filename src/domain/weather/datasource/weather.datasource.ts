export abstract class WeatherDatasource {
  abstract get(path: string | null): Promise<any>;
}
