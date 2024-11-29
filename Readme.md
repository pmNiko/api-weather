#### Api-Test

---

###### Procedimiento de creación

    - A. Primer escenario consulta de datos a una API externa
        1. Interfacear el JSON de respuesta dentro del /domain
        2. Definir el datasource para acceso a datos
        3. Pasamos a definir la abstracción del repositorio.
           En este definimos el método de consulta.
        4. Definimos la entidad con las props y validaciones
           de son de interes para la lógica de negocio.
        5. Pasamos a definir el DTO el cual procesará los datos
           que llegaran al frontend.
        6. En este punto definimos el caso de uso en la carpeta /application
        7. Una vez definido el caso de uso creamos el servicio que centraliza
           la utilización de los casos de uso.
        8. En este punto ya comezariamos el camino de rutas y controller en /presentation
           - Camino de nececidades:
               * Las rutas necesitan el controller para responder a los endpoints
               * Por lo que debemos implementar el controller, el controller recibe el
                 service y ejecuta el método acorde al endpoint correspondiente.
                 Finalmente retorna la data o el error.
               * Bien pero la sigamos la ruta de necesidades hasta llegar las concreciones.
                 El service requiere los "casos de uso" -> los cuales
                 necesitan un "repository" y el repository requiere un "datasource"
               * Llegamos a la necesidad de implementar los detalles del
                 "repository" y "datasource", estos se definen en la /infraestructure
        9. Pasemos a definir el punto mas lejano, el detalle del acceso a datos,
           comencemos por el datasource.
           Esta clase deberá implementar la clase abstracta Datasource<domain>
       10. Finalmente el repository. El cual implementará la clase Repository<domain>.
           Este repositorio en su método convertirá la respuesta a una entity verificando
           las props, para luego crear un objeto DTO de retorno.

```
src/
├── config
│   └── plugins
│       ├── env.plugins.ts
│       └── index.ts
├── domain
│   └── weather
│       ├── datasource
│       ├── dto
│       ├── entity
│       ├── interfaces
│       └── repository
├── helpers
│   └── errors
│       ├── custom-error.ts
│       └── handleError.ts
├
├── application
│   └── weather
│       ├── services
│       └── use-cases
├── infraestructure
│   └── weather
│       ├── datasource
│       └── repository
├── presentation
│   ├── routes.ts
│   ├── server.ts
│   └── weather
│       ├── controller.ts
│       └── routes.ts
└── app.ts

```
