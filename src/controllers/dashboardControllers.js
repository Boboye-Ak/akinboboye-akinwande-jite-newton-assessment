module.exports.dashboard_get = async (req, res) => {
    try {
        const activeUser = req.activeUser
        return res.status(200).json({ message: `Welcome to your dashboard ${activeUser.username}`, error: false, status: 200 })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error", error: true, status: 500 })
    }

}