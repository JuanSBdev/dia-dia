const http = require("http");
const PORT = 3001;
const characters = require('./utils/data')



http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')   ){
        const id = req.url.split('/').pop();
    }
})
.listen(PORT, 'localhost')