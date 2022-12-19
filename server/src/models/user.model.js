const db = require('mongoose');
const { passwordHashing, comparePassword } = require('../utils/password.util');

const userSchema = db.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    authSocial: {
        type: Boolean,
        default: false,
        required: true,
    },

    password: {
        type: String,
        required: function () {
            return this.authSocial ? false : true
        },
        trim: true,
        default: null,
    },
    email: {
        type: String,
        // required: true,
        trim: true,
        unique: true,
    },
    picture: {
        type: String,
        default: "",
    },
    token: {
        type: String,
        default: null,
    },
    // googleToken: {
    //     type: String,
    //     default: null,
    // },
    // githubToken: {
    //     type: String,
    //     default: null,
    // },
    confirm: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await passwordHashing(this.password)
});

userSchema.methods.verifyPassword = async function (pass) {
    return await comparePassword(pass, this.password)
}

const User = db.model('User', userSchema);

module.exports = User;