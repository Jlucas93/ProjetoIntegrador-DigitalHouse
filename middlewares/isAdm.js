const isAdm = (req, res, next) => {
    if (!req.session.user || !req.session.user.admin) {
        return res.redirect('/adm/login')
    }
    res.locals.user = req.session.user
    next()
}

module.exports = isAdm