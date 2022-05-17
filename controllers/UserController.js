const UserModel = require('../models/UserModel')
// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.nickName && !req.body.password && !req.body.passwordAgain) {
        res.status(400).render('history', {mydata: "Content can not be empty!"})
    }

    const user = new UserModel({
        email: req.body.email,
        nickName: req.body.nickName,
        password: req.body.password,
        passwordAgain: req.body.passwordAgain
    });

    await user.save().then(data => {
        res.render('history', {mydata: "user "+ data.nickName +" created succesfully!"})
    }).catch(err => {
        res.render('history', {mydata: err.message || "Some error occurred while creating user"})
    });
};
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).render('history', {mydata: user})
    } catch(error) {
        res.status(404).render('history', {mydata: error.message})
    }
};
// Find a single User with an email and password
exports.logIn = async (req, res) => {
    try {
        const user = await UserModel.findOne(req.query, (err, users) => {
            const message = users.length == 0 ? "Not Found" : "Found";
            if(users.length == 0)
                res.status(200).json({message, users});
            else res.render('auth/userAccount', {users});
        }).exec();
    } catch(error) {
        res.status(404).render('history', {mydata: error.message})
    }
};
// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    await UserModel.findByIdAndUpdate(
        {nickName: req.body.nickName, password: req.body.old_password},
        {nickName: req.body.nickName, password: req.body.new_password}
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    const email = req.body.email;
    await UserModel.deleteOne({email}).then(data => {
        if (!data) {
            res.status(404).render('history', {mydata: "User not found"}).redirect('/')

        } else {
            res.render('history', {mydata: "user "+data.nickName+" deleted succesfully!"})
        }
    }).catch(err => {
        res.status(500).render('history', {mydata: err.message})
    });
};