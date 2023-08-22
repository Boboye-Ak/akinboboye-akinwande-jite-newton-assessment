const bcrypt = require("bcrypt")
const User = require("../models/Users")
const { createToken } = require("../utils/tokens")
const { validatePassword } = require("../utils/password-validation")

module.exports.signup_post = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ message: "Please enter username and password" })
        }
        if(!validatePassword(password)){
            return res.status(400).json({message:"Password too weak. Passowrd must contain letters, numbers, symbols and must be at least 8 characters long"})
        }
        const usernameExists = await User.findOne({ username: username.toLowerCase() })
        if (usernameExists) {
            return res.status(409).json({ message: "Username already in use" })
        }
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ username: username, password: hashedPassword })
        await newUser.save()
        const accessToken = createToken(newUser._id)
        return res.status(200).json({ message: "New User Created", username: newUser.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error" })
    }


}

module.exports.login_post = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ message: "User with username not found" })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.status(400).json({ message: "Incorrect password" })
        }
        const accessToken = createToken(user._id)
        return res.status(200).json({ message: "Login Successful", username: user.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error" })
    }

}


