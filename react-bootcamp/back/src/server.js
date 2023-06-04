const http = require("http");
const PORT = 3001;
const characters = require('./utils/data')



http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')   ){
        const id = req.url.split('/').pop();
        const character = characters.filter(c => c.id ===  Number(id));
        
        res
        .writeHead(200, {"content-type": "aplication-json"})
        .end(JSON.stringify(character[0]));
    }
})
.listen(PORT, 'localhost')