const express = require('express');
var path = require('path');

const app = express();

// app.use(express.static('./public/'));



app.get('/api/:nombre/:apellido/:id', (req, res)=>{
    console.log(req.params)
})
app.listen(3001, () => {
    console.log('Port 3001, Readys!')
})
// app.get('/response', (req, res, next) => {
//     res.sendFile(path.join(__dirname + '/public/response.html'))
// });