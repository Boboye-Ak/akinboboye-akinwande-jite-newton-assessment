module.exports.dashboard_get = async (req, res) => {
    const activeUser = req.activeUser
    return res.status(200).json({ message: `Welcome to your dashboard ${activeUser.username}`, status: 200 })
}