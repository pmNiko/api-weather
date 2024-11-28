#### Api-Test

```
src/
├── config/
│   ├── environment.ts               # Variables de entorno
│
├── domain/
│   ├── interfaces/                  # Definición de interfaces y entidades
│   │   ├── Weather.ts               # Interfaz para el modelo Weather
│
├── application/
│   ├── use-cases/                   # Implementación de casos de uso
│   │   ├── GetWeather.ts            # Caso de uso para obtener datos del clima
│
├── infrastructure/
│   ├── services/                    # Integraciones con servicios externos
│   │   ├── WeatherChannelApiService.ts  # Servicio para interactuar con theWeatherChannelApi
│   ├── utils/                       # Utilidades generales
│       ├── helpers.ts               # Funciones reutilizables
│
├── presentation/
│   ├── controllers/                 # Controladores HTTP
│   │   ├── WeatherController.ts     # Controlador para las rutas de Weather
│   ├── routes/                      # Definición de rutas HTTP
│   │   ├── weatherRoutes.ts         # Rutas HTTP para Weather
│   ├── app.ts                       # Configuración inicial de la aplicación
│
├── tests/                            # Pruebas
│   ├── mocks/                       # Mock de servicios para pruebas
│   │   ├── MockWeatherChannelApiService.ts  # Mock del servicio externo
│   ├── GetWeatherUseCase.test.ts    # Pruebas unitarias para el caso de uso
│
└── main.ts                           # Punto de entrada principal
```
