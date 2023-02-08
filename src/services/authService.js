const User = require('../models/User');
const jwt = require('../lib/jsonWebToken');
const config = require('../config');

exports.createUser = (data) => User.create(data);

exports.getUser = (email) => User.findOne({email});

exports.login = async (email, password) =>{

    const user = await this.getUser(email);

    if(!user){

        throw "User or password don`t match!"
    }

    const isValid = await user.validatePassword(password);

    if(!isValid){

        throw "User or password don`t match!"
    }
    const payload = {_id: user._id, user: user.username, email: user.email}
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'})
    return token;
}

