const verificarLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login')
    }
    res.locals.user = req.session.user
    next()
}

module.exports = verificarLogin