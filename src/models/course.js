const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    coordinator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'coordinator'
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;