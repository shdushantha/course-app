const mongoose = require('mongoose');
const MONGODB_URL = "mongodb://127.0.0.1:27017/course-app";
const DB_URL = process.env.MONGODB_URL || MONGODB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});