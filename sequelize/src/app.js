const express = require('express')

const app = express();

app.use('/v', (req, res)=>{
    res.send('alo')
})

module.exports = app;