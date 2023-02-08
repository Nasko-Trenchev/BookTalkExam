const express = require('express');
const authService = require('../services/authService');

exports.getLoginPage = (req, res) =>{

    res.render('login');
}

exports.postLoginPage = async (req, res) =>{

    const {email, password} = req.body;
    const token = await authService.login(email, password);
    res.cookie('auth', token, {httpOnly: true});
    res.redirect('/')
}


exports.getRegisterPage = (req, res) =>{

    res.render('register');
}

exports.postRegisterPage = async (req, res) => {

    const {email, username, password, repass} = req.body;

    if(password !== repass){

        throw "Passwords don`t match!";
    }

    await authService.createUser({email, username, password, repass});

    res.redirect('/');
}