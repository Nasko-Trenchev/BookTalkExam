const authService = require('../services/authService');

exports.getLoginPage = (req, res) =>{

    res.render('login');
}

exports.postLoginPage = async (req, res) =>{

    const {email, password} = req.body;
    
    try{
        const token = await authService.login(email, password);
        res.cookie('auth', token);
    }
    catch(err){

        return res.render('login', {error: err})
    }
    res.redirect('/')
}


exports.getRegisterPage = (req, res) =>{

    res.render('register');
}

exports.postRegisterPage = async (req, res) => {

    const {email, username, password, repass} = req.body;

    if(password !== repass){

        return res.render('register', {error: "Passwords don`t match!"})
    }

    try{
        await authService.createUser({email, username, password, repass});

    }
    catch(err){
        const errors = Object.keys(err.errors).map(key => err.errors[key].message)
        return res.render('register', {error: errors[0]})
    }

    res.redirect('/');
}

exports.getLogout = (req, res) =>{

    res.clearCookie('auth');
    res.redirect('/');
}