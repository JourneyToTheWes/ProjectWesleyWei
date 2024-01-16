import * as express from 'express';
import { Application } from 'express';
import * as path from 'path';
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
        
        // These two lines are to serve the static React build project that has been manually
        // copied over to the server directory '/public' folder. The second line is to match
        // any route other than '/api*' to use the React index html build file as it the client
        // app cannot route as it normally does locally. Any requests to any route (other than '/api*')
        // would be served index.html.
        // Note: uncomment out these two lines when building the server directory and deploying the service
        // so that the full-stack applicant can work seamlessly.
        // this.app.use(express.static(path.join(__dirname + '/build/public')));
        // this.app.use(express.static(path.join(__dirname + '/../public')));
        // this.app.get('^(?!\/?api).+$', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
        // this.app.get('^(?!\/?api).+$', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
        // this.app.get(/^(http:\/\/)?[\w.:]+\/(?!\/?api).+$/gm, (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
        
        this.port = appInit.port;
        this.useMiddleWares(appInit.middleWares);
        this.useRoutes(appInit.controllers);

        // console.log("path join dirname: " + path.join(__dirname, '/../public', 'index.html'));
        // this.app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/build/public', 'index.html')));
        // this.app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));
        // this.app.get('^(?!\/?api).+$', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
        // this.app.get(/^\/(?!api).*/, (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
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