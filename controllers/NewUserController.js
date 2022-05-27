const User = require('../models/UserModel')
const bcrypt = require('bcrypt')

exports.login = (req,res) => {

    res.render('login')
}

exports.loginUser = (req,res) => {

    const {email, password} = req.body

    User.findOne({email:email}, (error, user) => {
        if (user){
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id
                    res.redirect('/')
                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            res.redirect('/auth/login')
        }
    })
}

exports.logout = (req,res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}

exports.newUser = (req,res) => {

    if (req.session.userId) {
        return res.redirect('/')
    }

    var username = ""
    var password = ""
    const data = req.flash('data')[0];

    if (typeof data!= "undefined") {
        username = data.username
        password = data.password
    }

    res.render('registration', {
        // errors: req.session.registrationErrors
        errors: req.flash('validationErrors'),
        username: username,
        password: password
    })
}

exports.storeUser = (req,res) => {

    if (req.session.userId) {
        return res.redirect('/')
    }

    User.create(req.body, (error, user) => {
        if (error) {
            const validationErrors = Object.keys(error.errors).map(key=> error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            // req.session.validationErrors = validationErrors
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}