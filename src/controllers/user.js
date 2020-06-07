const userService = require('../services/user');


const createUser = (req,res) => {
     return userService.createUser(req,res);
};

module.exports = {
    createUser : createUser
};