const User = require('../models/User');

exports.createUser = (data) => User.create(data);

exports.getUser = (email) => User.findOne(email);

exports.login = async (email, password) =>{

    const user = this.getUser(email);

    if(!user){

        throw "User or password don`t match!"
    }

    const payload = {_id: user._id, user: user.username, email: user.email}
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'})
}

