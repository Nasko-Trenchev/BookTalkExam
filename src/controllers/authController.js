
exports.getLoginPage = (req, res) =>{

    res.render('login');
}


exports.getRegisterPage = (req, res) =>{

    const {email, username, password, repass } = req.body;
    
    res.render('register');
}