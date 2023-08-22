module.exports.dashboard_get = async (req, res) => {
              /* #swagger.responses[200] = {
            description: 'Username, status and token.',
            schema: {
                status: 200,
                message: 'Welcome to your dashboard boboye66',
                
            }
    } */
    // #swagger.description = 'Endpoint for user to get his dashboard data from the backend'
    try {
        const activeUser = req.activeUser
        return res.status(200).json({ message: `Welcome to your dashboard ${activeUser.username}`, status: 200 })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error" })
    }

}