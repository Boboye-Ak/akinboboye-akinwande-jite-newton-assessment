const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String, required: true, unique: true, lowercase:true
    },
    password: {
        type: String,
    }
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel