const express = require("express")
const { signup_post, login_post } = require("../controllers/authControllers")
const { signupValidator, loginValidator } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/signup", [signupValidator], signup_post)
router.post("/login", [loginValidator], login_post)


module.exports = router