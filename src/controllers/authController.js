const express = require('express');
const authService = require('../services/authService');
const jwt = require('../lib/jsonWebToken');
const config = require('../config')

exports.getLoginPage = (req, res) =>{

    res.render('login');
}

exports.postLoginPage = async (req, res) =>{

    const {email, password} = req.body;

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