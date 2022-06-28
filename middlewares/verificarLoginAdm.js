const verificarLogin = (req, res, next) => {
    if (!req.session.user || !req.session.user.admin) {
        res.locals.error = 'Você não tem permisão de admin'
        return res.status(403).redirect('/adm/login')
    }
    res.locals.user = req.session.user
    next()
}

module.exports = verificarLogin