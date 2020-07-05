const User = require("../models/user");
const Util = require("../middleware/util");
const fs = require('fs-extra');
const path = require("path");

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const folderName = Util.getUserRoleKey(req.body.role);
    const fileName = req.file.originalname;
    const filePath = path.join(__dirname, "../uploads/" + folderName + "/" + fileName);
    
    await fs.move(path.join(__dirname,"../uploads/" + fileName), filePath);

    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getUser = async (req, res) => {
  try{
    const userId = req.params.id;
    let user = User.findById(userId);
    res.send(200).send(user);

  }catch(e){
    res.status(400).send(e);
  }
};

const patchUser = async (req, res) => {
  try{
      const updates = ['firstName','lastName','email','birthDate','role'];
      let userId = req.body._id;
      let user = User.findById(userId);
      updates.forEach((update) => {
        user[update]=req.body[update];
      });
      await user.save();
      res.send(user);

  }catch(e){
    res.status(400).send(e);
  }
};

const deleteUser = async (req, res) => {
  try{
    let userId = req.body._id;
    let user = User.findById(userId);
    await user.remove();
    res.send(user);
  }catch(e){
    res.status(400).send(e);
  }
};

module.exports = { 
  createUser: createUser,
  getUser: getUser,
  patchUser: patchUser,
  deleteUser: deleteUser,
};
