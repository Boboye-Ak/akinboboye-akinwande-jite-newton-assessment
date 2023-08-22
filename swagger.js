const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/index.js']

swaggerAutogen(outputFile, endpointsFiles,
    {
        host: "akinboboye-akinwande-tobmas-production.up.railway.app",
        schemes: ["https","http" ],
    })