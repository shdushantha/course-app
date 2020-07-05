const Student = require("../models/student");
const Util = require("../middleware/util");

const createStudent = async (req, res) => {
  try {
    const regNumber = Util.registarationNumber(req.body.bithDate);
    req.body.registrationNumber = regNumber;
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findOne({ _id: studentId });
    res.status(200).send(student);
  } catch (e) {
    res.status(400).send(e);
  }
};

const patchStudent = async (req,res) => {
    try{
      
    }catch(e){
        res.status(400).send(e);
    }
};

const deleteStudent = async (req,res) => {
    try{
      const studentId = req.params.id;
      const student = Student.findOne({_id:studentId});
      await student.remove();
      res.status(200).send(student);
    }catch(e){
        res.status(400).send(e);
    }
};

const getStudentByCourse = async (req, res) => {
  try {
  } catch (e) {
    res.status(400).send(e);
  }
};

const getStudentBySubject = async (req, res) => {
  try {
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  createStudent: createStudent,
  getStudent: getStudent,
  patchStudent : patchStudent,
  deleteStudent : deleteStudent,
  getStudentByCourse: getStudentByCourse,
  getStudentBySubject: getStudentBySubject,
};
