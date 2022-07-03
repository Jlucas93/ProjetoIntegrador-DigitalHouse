const isADm = (req, res, next) => {
    if (!req.session.user.admin) {
        return res.redirect('/')
    }
    return next()
}

module.exports = isADm