const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    registrationNumber:{
        type: String,
        required: true,
        trim: true
    },
    birthDate:{
        type: Date,
        required: true,
        trim: true
    },
    role: {
        type: String,
        require: true,
        trim: true
    },
    avatar: {
        type: Buffer
    }

});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;