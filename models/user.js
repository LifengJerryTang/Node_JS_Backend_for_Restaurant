var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true  // no two users should have the same username
    // },
    //
    // password: {
    //     type: String,
    //     required: true
    // }, Will be automatically added in by passport

    firstname: {
        type: String,
        default: ''
    },

    lastname: {
        type: String,
        default: ''
    },

    facebookId: String,

    admin: {
        type: Boolean,
        default: false
    }
})

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
