const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send('probando ruta con express')
})

app.get('/user', (req, res)=>{
    res.send('ruta user')

})

app.get('/ab?cd', (req, res)=>{
    res.send('la ruta --> /ab?cd')
})
app.get('/ab*cd', (req, res)=>{
    res.send('esta es la ruta --> /ab*cd')
})
app.listen(4001, ()=> console.log('hola express!!!'))