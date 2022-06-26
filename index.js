const express = require('express');
const homeRouter = require('./routes/home')
const admRouter = require('./routes/adm')
const session = require('express-session')

const port = 3001
const app = express();
const methodOverride = require('method-override');

//Iniciando servidor
app.listen(port, () => console.log('Server started on port ' + port))

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views'); // padrão o express já configura a pasta views
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js 
app.use(session({
	secret: 'my first sesseion',
	resave: false,
	saveUninitialized: false
}))//Iniciando uma sessao

//Routas
app.use(homeRouter)
app.use(admRouter)

//Para páginas não encontradas
app.use((_req, res, _next) => {
	return res.status(404).render('not-found', { error: 'Página não encontrada' });
})