import express, { Router } from "express";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  private serverListen: any;

  constructor(options: Options) {
    const { port, routes } = options;

    this.port = port;
    this.routes = routes;
  }

  async start() {
    //* ------------  Middlewares ----------------- */
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    //* ------------  Routes ----------------- */
    this.app.use(this.routes);

    //* ------------  Listen Server ----------------- */
    this.serverListen = this.app.listen(this.port, () => {
      console.log(`Server on port: ${this.port} `);
    });
  }

  public stop() {
    this.serverListen.close();
  }
}
