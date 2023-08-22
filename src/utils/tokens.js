const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

const createToken = (id) => {
    const token = jwt.sign({ id }, JWT_SECRET, {
        expiresIn: 100 * 24 * 60 * 60,
    })
    return token
}



module.exports = { createToken }
