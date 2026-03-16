const express = require('express');
import { Request, Response } from 'express';
import IControllerBase from './interfaces/IControllerBase';
import Video from '../models/Video';

class VideoController implements IControllerBase {
	public path = '/api/videos';
	public router = express.Router();

	constructor() {
		this.initRoutes();
	}

	public initRoutes = () => {
		this.router.get(this.path, this.getVideos);
	};

	getVideos = async (req: Request, res: Response) => {
		try {
			const videos = await Video.find();
			res.json(videos);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	};
}

export default VideoController;
