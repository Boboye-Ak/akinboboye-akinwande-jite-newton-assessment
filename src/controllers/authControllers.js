const bcrypt = require("bcrypt")
const User = require("../models/Users")
const { createToken } = require("../utils/tokens")


module.exports.signup_post = async (req, res) => {
    try {
        const { username, password, hashedPassword } = req.body
        const newUser = new User({ username: username, password: hashedPassword })
        await newUser.save()
        const accessToken = createToken(newUser._id)
        return res.status(200).json({ message: "New User Created", status: 200, username: newUser.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error", status: 500 })
    }


}

module.exports.login_post = async (req, res) => {
    try {
       
const user=req.user
        const accessToken = createToken(user._id)
        return res.status(200).json({ message: "Login Successful", status: 200, username: user.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error", status: 500 })
    }

}


