const express = require("express");
import { Request, Response } from "express";
import IControllerBase from "./interfaces/IControllerBase";
import WorkExperience from "../models/WorkExperience";

class WorkExperienceController implements IControllerBase {
    public path = "/api/work-experience";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes = () => {
        this.router.get(this.path, this.getWorkExperience);
    };

    getWorkExperience = async (req: Request, res: Response) => {
        try {
            const workExperience = await WorkExperience.find();
            res.json(workExperience);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    };
}

export default WorkExperienceController;
