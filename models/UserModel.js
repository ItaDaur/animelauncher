let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickName: {
        type: String,
        default: ''
    },
    password: {type: String, required: true},
    passwordAgain: {type: String, required: true},
});
let userModel = new mongoose.model('User', schema);
module.exports = userModel;