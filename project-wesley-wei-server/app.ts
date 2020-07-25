import * as express from 'express';
import { Application } from 'express';
type Port = string | number;
interface IAppInit {
    port: Port;
    middleWares: any;
    controllers: any;
}

class App {
    app: Application;
    port: Port;

    constructor(appInit: IAppInit) {
        this.app = express();
        this.port = appInit.port;
        this.useMiddleWares(appInit.middleWares);
        this.useRoutes(appInit.controllers);
    }

    private useMiddleWares = (middleWares: any[]) => {
        middleWares.forEach(middleWare => this.app.use(middleWare));
    }
    
    private useRoutes = (controllers: any[]) => {
        controllers.forEach(controller => this.app.use('/', controller.router));
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}

export default App;