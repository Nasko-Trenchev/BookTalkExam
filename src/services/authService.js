const User = require('../models/User');

exports.createUser = (data) => User.create(data);
