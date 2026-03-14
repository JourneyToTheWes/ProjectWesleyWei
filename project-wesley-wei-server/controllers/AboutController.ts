const express = require("express");
import { Request, Response } from "express";
import IControllerBase from "./interfaces/IControllerBase";
import About from "../models/About";

class AboutController implements IControllerBase {
    public path = "/api/about";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes = () => {
        this.router.get(this.path, this.getAbout);
    };

    getAbout = async (req: Request, res: Response) => {
        try {
            const about = await About.findOne();
            res.json(about);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    };
}

export default AboutController;
