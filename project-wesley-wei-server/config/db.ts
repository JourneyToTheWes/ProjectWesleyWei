const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI || config.get('mongoURI'), {
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