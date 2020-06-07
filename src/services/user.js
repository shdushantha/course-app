const User = require('../models/user');

const createUser = async (req,res) => {
    const user = new User(req.body);
    console.log(user);

    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });

    }catch(e){
        res.status(400).send(e);
    }
};

module.exports = {
    createUser : createUser
};