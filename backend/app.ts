import * as express from "express";
import { Application } from "express";
import * as path from "path";
import * as fs from "fs";
const cors = require("cors");
const config = require("config");
const frontendUrl = config.get("frontendUrl");

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
        this.useCors();
        this.useMiddleWares(appInit.middleWares);
        this.useRoutes(appInit.controllers);

        // test read folder in docker env
        console.info("Files at project-wesley-wei-server directory");
        fs.readdir(".", (err, files) => {
            files.forEach((file) => {
                console.log(file);

                if (file === "public") {
                    console.info("Files in public folder");
                    fs.readdir("./public", (err, files) => {
                        files.forEach((file) => {
                            console.log(file);
                        });
                    });
                }
            });
        });

        this.app.use(express.static(path.join(__dirname + "/../public")));
        this.app.get(/^\/(?!api).*/, (req, res) =>
            res.sendFile(path.join(__dirname + "/../public/index.html")),
        );
    }

    private useCors = () => {
        const corsOptions = {
            origin: frontendUrl,
            methods: ["GET", "POST", "PUT", "DELETE"],
        };
        this.app.use(cors(corsOptions));
    };

    private useMiddleWares = (middleWares: any[]) => {
        middleWares.forEach((middleWare) => this.app.use(middleWare));
    };

    private useRoutes = (controllers: any[]) => {
        controllers.forEach((controller) =>
            this.app.use("/", controller.router),
        );
    };

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}

export default App;
