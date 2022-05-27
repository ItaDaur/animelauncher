let mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

let UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickName: {
        type: String,
        default: ''
    },
    password: {type: String, required: true}
});

UserSchema.plugin(uniqueValidator)

UserSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password, 10,(error, hash)=>{
        user.password = hash
        next()
    })
})

let userModel = new mongoose.model('User', UserSchema);
module.exports = userModel;