const express = require('express')
const routerMovies = express.Router()

routerMovies.get('/', (req, res)=>{
    res.send('metodo get movies')
})
routerMovies.delete('/', (req, res)=>{
    res.send('ruta delete de movies')
})
routerMovies.post('/', (req, res)=>{
    const {name, pass} = req.body;
    if(name, pass){
        return res.status(200).send('datos correctos')
    }
    else {return res.status(404).send('datos incorrectos')}
})

module.exports = routerMovies;