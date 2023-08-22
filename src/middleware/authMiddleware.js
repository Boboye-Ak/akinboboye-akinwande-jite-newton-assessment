const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const User = require("../models/Users")
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