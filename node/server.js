var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;
module.exports =
http.createServer( function( req, resp){
  console.log( `server raised in port ${PORT}` );
  if( req.url === '/api' ){
fs.readFile('./utils/dogsData.json', function(err, data){
  if(err){
    resp.writeHead(404, { 'Content-Type':'text/plain'});
    resp.end("json not found")}
  else{
    resp.writeHead(200, { 'Content-Type':'application/json' })
    resp.end(data)
  }
} )
}
return;
}).listen(PORT, "localhost" );

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */

  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
