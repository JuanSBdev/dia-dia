const express = require("express");

let publications = [];
let id = 1;
const server = express();

server.use(express.json());

server.delete('/posts/:id',(req, res)=>{
    const {id } = req.params;

    if(id){
        let post = publications.find(post => post.id === id)
        if(post){

            publications.filter(post)
            res.status(200).json({ success: true })
        }
        else{
            res.status(404).json({error: "No se recibió el id correcto necesario para eliminar la publicación"})
    }
}
    else{
        res.status(404).json({error: "No se recibió el id de la publicación a eliminar"})
    }
})

server.put('/posts/:id', (req, res)=>{
    let { title, contents } = req.body;
    let {id} = req.params;
    if(title && contents && id){
        let post = publications.find(f => f.id === parseInt(id));
        if(post){
            post.title = title
            post.contents = contents
            res.status(200).json(post) 
        }
        else{
            res.status(404).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
        }
    }
    else{
        res.status(400).json(
            {error: "No se recibieron los parámetros necesarios para modificar la publicación"}
        )
    }
})

server.get('/posts/:author', (req, res)=>{
    let filteredA = publications.filter( post => post.author === req.params.author )
    if(filteredA.length > 0){
        res.json(filteredA)
    }
    else{
        res.status(404).json({error: "No existe ninguna publicación del autor indicado"})
    }
})



server.get('/posts', (req, res) => {
    const {author, title } = req.query;
    
    let filtered = publications.filter(post => 
        post.author === author &&
        post.title === title
    );
    if(filtered.length > 0){
        res.json(filtered);
    }
    else{
        res.status(404).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
    }
});

server.post('/posts', (req, res) => {
    const { author, title, contents } = req.body;
    if (author && title && contents) {
        publications.push({
            "author": author,
            "title": title,
            "contents": contents,
            "id": id++
        });
        res.status(201).json(publications[publications.length - 1]);
    } else {
        res.status(400).json({ error: "No se recibieron los parámetros necesarios para crear la publicación" });
    }
});

// NO MODIFICAR EL CÓDIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
