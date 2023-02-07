const authService = require('../services/authService');

exports.getLoginPage = (req, res) =>{

    res.render('login');
}


exports.getRegisterPage = (req, res) =>{

    res.render('register');
}

exports.postRegisterPage = async (req, res) => {

    const {email, username, password, repass} = req.body;

    await authService.createUser({email, username, password, repass});

    res.redirect('/');
}