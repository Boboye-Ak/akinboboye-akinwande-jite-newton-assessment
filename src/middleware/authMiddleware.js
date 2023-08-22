const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const JWT_SECRET = process.env.JWT_SECRET
const User = require("../models/Users")
const { validatePassword } = require("../utils/password-validation")
module.exports.requiresAuth = async (req, res, next) => {
    //Logic to check for authentication
    const authHeaders = req.headers.authorization
    if (authHeaders) {
        const token = authHeaders?.split(" ")[1]
        jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                return res.status(403).json({ message: "Token is not valid" })
            } else {
                const user = await User.findOne({ _id: decodedToken.id })
                req.activeUser = user
                next()
            }
        })
    } else {
        return res.status(401).json({ message: "You are not authenticated" })
    }
}

module.exports.signupValidator = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ message: "Please enter username and password", status: 400 })
        }
        if (!validatePassword(password)) {
            return res.status(400).json({ message: "Password too weak. Passowrd must contain letters, numbers, symbols and must be at least 8 characters long with at least one capital letter", status: 400 })
        }
        const usernameExists = await User.findOne({ username: username.toLowerCase() })
        if (usernameExists) {
            return res.status(409).json({ message: "Username already in use", status: 409 })
        }
        const salt = await bcrypt.genSalt()
        req.body.hashedPassword = await bcrypt.hash(password, salt)
        next()
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error" })
    }

}

module.exports.loginValidator = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ message: "Please enter username and password" })
        }
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ message: "User with username not found", status: 404 })
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) {
            return res.status(401).json({ message: "Incorrect password", status: 401 })
        }
        req.user = user
        next()

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error" })
    }
}