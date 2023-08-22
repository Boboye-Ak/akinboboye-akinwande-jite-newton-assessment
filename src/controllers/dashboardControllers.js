module.exports.dashboard_get = async (req, res) => {
    /* #swagger.responses[200] = {
  description: 'Username, status and token.',
  schema: {
      status: 200,
      error: false,
      message: 'Welcome to your dashboard boboye66',
      
  }
} */
    /* #swagger.responses[401] = {
description: 'You need to login and send access token with your header',
schema: {
  status: 401,
  error: true,
  message: 'You are not authenticated',
  
}
} */
    /* #swagger.responses[403] = {
description: 'Your access token has either expired or is invalid. Please check properly or request a new one by logging in',
schema: {
status: 403,
error: true,
message: 'Token is invalid',
 
}
} */
    // #swagger.description = 'Endpoint for user to get his dashboard data from the backend'
    try {
        const activeUser = req.activeUser
        return res.status(200).json({ message: `Welcome to your dashboard ${activeUser.username}`, error: false, status: 200 })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error", error: true, status: 500 })
    }

}