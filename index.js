const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session')

//Rotes
const homeRouter = require('./src/routes/home')
const authRouter = require('./src/routes/auth')
const produtoRouter = require('./src/routes/produto')
const carrinhoRouter = require('./src/routes/carrinho')
const admRouter = require('./src/routes/adm')


//Starting the server
const port = 3000
app.listen(port, () => console.log('Server started on port ' + port))

//Express
app.use(methodOverride('_method'));
app.use(express.static('public')); // tornando o acesso publico da pasta
app.set('view engine', 'ejs'); //estabelcer a engine como ejs
app.set('views', './src/views'); // padrão o express já configurar a pasta views
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js 

app.use(session({
  secret: 'my first sesseion',
  resave: false,
  saveUninitialized: false,
  /* cookie: { maxAge: 60000 * 0.5 } */
}))//Iniciando uma sessao

app.use(homeRouter)
app.use(authRouter)
app.use("/adm/produto", produtoRouter)
app.use(carrinhoRouter)
app.use(admRouter)

//Not-Found
app.use((_req, res, next) => {
  return res.status(404).render('home/not-found', { error: 'Página não encontrada' });
})
