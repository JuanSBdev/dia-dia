const express = require("express");
const morgan = require("morgan");
const router = require('./routerUsers')
const routerMovies = require('./routerMovies');

const app = express();

app.use(morgan('dev'));

app.use(express.json())

app.use('/user', router)

app.use('/movies', routerMovies)
// app.use('/', (req, res, next)=>{
//     console.log('soy el middleware');
//     next()
// })

// app.get('/', (req, res)=>{
//     res.send('probando ruta con express')
// })

// app.get('/user', (req, res)=>{
//     res.send('ruta user')

// })

// app.get('/ab?cd', (req, res)=>{
//     res.send('la ruta --> /ab?cd')
// })
// app.get('/ab*cd', (req, res)=>{
//     res.send('esta es la ruta --> /ab*cd')
// })
app.listen(4001, ()=> console.log('hola express!!!'))