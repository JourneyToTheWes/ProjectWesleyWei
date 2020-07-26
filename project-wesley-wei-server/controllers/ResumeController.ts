const express = require('express');
import { Request, Response } from 'express';
import IControllerBase from './interfaces/IControllerBase';
import Resume from '../models/Resume';

class ResumeController implements IControllerBase {
	public path = '/api/resume';
	public router = express.Router();

	constructor() {
		this.initRoutes();
	}

	public initRoutes = () => {
		this.router.get(this.path, this.getResume);
	};

	getResume = async (req: Request, res: Response) => {
		try {
			const resumes = await Resume.find();
			res.json(resumes);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	};
}

export default ResumeController;
