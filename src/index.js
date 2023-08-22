require("dotenv-flow").config()
const Mongoose = require("mongoose")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const express = require("express")
const authRouter = require("./routers/authRouter")
const { dashboard_get } = require("./controllers/dashboardControllers")
const { requiresAuth } = require("./middleware/authMiddleware")

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI
const app = express()

//Connect to DB
//DB Connecting
Mongoose.set("strictQuery", false)
Mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB is connected")
    })
    .catch((e) => {
        console.log(e)
        console.log("Error connecting to DB")
    })


//Middleware
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(cors())
app.use(express.json())

//Routing
app.use("/api/auth", authRouter)
app.get("/api/dashboard", [requiresAuth], dashboard_get)

//Test endpoint
app.get("/test", (req, res) => {
    return res.status(200).json({ message: "Hello world" })
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


module.exports=app