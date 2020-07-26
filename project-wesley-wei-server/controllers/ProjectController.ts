const express = require('express');
import { Request, Response } from 'express';
import IControllerBase from './interfaces/IControllerBase';
import Project from '../models/Project';

class ProjectController implements IControllerBase {
	public path = '/api/projects';
	public router = express.Router();

	constructor() {
		this.initRoutes();
	}

	public initRoutes = () => {
		this.router.get(this.path, this.getProjects);
	};

	getProjects = async (req: Request, res: Response) => {
		try {
			const projects = await Project.find();
			res.json(projects);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	};
}

export default ProjectController;
