const express = require('express');
const homeRouter = require('./routes/home')

const port = 3001
const app = express();
const methodOverride = require('method-override');
app.use((request, _response, next) => {
	if (request.method === 'POST' && request.query._method) {
		request.method = request.query._method
	}
	next()
})
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views'); // padrão o express já configura a pasta views
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js 

//Iniciando servidor
app.listen(port, () => console.log('Server started on port ' + port))

//Routas
app.use(homeRouter)


//Para páginas não encontradas
app.use((_req, res, _next) => {
	return res.status(404).render('not-found', { error: 'Página não encontrada' });
})