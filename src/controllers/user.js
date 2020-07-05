const userService = require("../services/user");
const user = require("../services/user");

const createUser = (req, res) => {
  return userService.createUser(req, res);
};

const getUser = (req, res) => {
  return userService.getUser(req, res);
};

const patchUser = (req, res) => {
  return userService.patchUser(req, res);
};

const deleteUser = (req, res) => {
    return userService.deleteUser(req,res);
};

module.exports = {
  createUser: createUser,
  getUser: getUser,
  patchUser: patchUser,
  deleteUser: deleteUser,
};
