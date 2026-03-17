const express = require("express");
import { Request, Response } from "express";
import IControllerBase from "./interfaces/IControllerBase";
import SiteConfig from "../models/SiteConfig";

class SiteConfigController implements IControllerBase {
    public path = "/api/site-config";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes = () => {
        this.router.get(this.path, this.getSiteConfig);
    };

    getSiteConfig = async (req: Request, res: Response) => {
        try {
            const siteConfig = await SiteConfig.findOne();
            res.json(siteConfig);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    };
}

export default SiteConfigController;
