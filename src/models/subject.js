const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
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
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'instructor'
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'course'
    }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;