const User = require("../models/Users")
const { createToken } = require("../utils/tokens")


module.exports.signup_post = async (req, res) => {
    try {
        const { username } = req.body
        const hashedPassword = req.hashedPassword
        const newUser = new User({ username: username, password: hashedPassword })
        await newUser.save()
        const accessToken = createToken(newUser._id)
        return res.status(200).json({ message: "New User Created",error: false, status: 200, username: newUser.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error",error: true, status: 500 })
    }


}

module.exports.login_post = async (req, res) => {
    try {
        const user = req.user
        const accessToken = createToken(user._id)
        return res.status(200).json({ message: "Login Successful", status: 200, error: false, username: user.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error",error: true, status: 500 })
    }

}


