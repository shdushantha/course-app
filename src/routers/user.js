const express = require('express');
const router = new express.Router();
const userController = require('../controllers/user');
const auth = require('../middleware/auth');
const Util = require('../middleware/util');


router.post('/users',Util.uploadProfileImage.single('avatar'),userController.createUser);
router.get('/users/me', auth ,userController.getUser);
router.patch('users/me', auth, userController.patchUser);

module.exports = router;
