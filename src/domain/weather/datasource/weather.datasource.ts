export abstract class WeatherDatasource {
  abstract get<T>(path: string | null): Promise<T>;
}
