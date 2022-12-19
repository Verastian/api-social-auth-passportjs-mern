const { wrapperCommon } = require("../utils/wrappers.util");
const { User } = require("../models");

module.exports = {
    saveUser: wrapperCommon(async (user) => {
        const newUser = await user.save();
        console.log(newUser)
        return newUser;
    }),
    getUserByEmail: wrapperCommon(async (email) => {
        const userFound = await User.findOne({ email })
        return userFound
    }),
    getUserById: wrapperCommon(async (_id) => {
        const userFound = await User.findById({ _id })
            .select('-password -confirm -token -createdAt -updatedAt -__v');
        return userFound
    }),


};
