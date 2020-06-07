const express = require('express');
const router = new express.Router();
const userController = require('../controllers/user');

router.post('/users',userController.createUser);

module.exports = router;
