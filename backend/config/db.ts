const mongoose = require('mongoose');
import dotenv from "dotenv";
dotenv.config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        if (!db) {
            throw new Error('MONGO_URI environment variable is not set');
        }

        await mongoose.connect(db, {
            useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;