// function sumaUno(){
//     let resultado = 0;
//     return function(){
//         return ` El resultado es ${resultado++}  `
        
//     }
// }
// let nuevaSuma = sumaUno(); // function( { return resultado ++})
// console.log(nuevaSuma());
// console.log(nuevaSuma());
// console.log(nuevaSuma());
// console.log(nuevaSuma());

// let otraSuma = sumaUno();
// console.log(otraSuma());
// console.log(otraSuma());

// console.log(nuevaSuma());

// let contenedor = function (){
//     let caja = [];
//     return function(item){
//         caja.push(item);
//         return caja;
//     }
// }

// let nuevaCaja = contenedor();

// nuevaCaja('asado');
// nuevaCaja('parrillla');
// console.log(nuevaCaja());

// // var crearFuncion = function(){
// //     var arreglo = [];
// //     for (let i = 0; i < 3; i++) {
// //         arreglo.push(function(){
// //             console.log(arreglo[i])
// //         })        
// //     }
// //     return arreglo;
// // }

// // let nuevo = crearFuncion()
// // console.log(nuevo)


// //BIND
// function suma(a, b){
//     return a + b;
// }

// let sumaDos = suma.bind(this, 3);
// console.log(sumaDos(2))

// //call no la va a guardar, usar una sola vez
// console.log(suma.call(this, 2, 2))

// let persona = {
//     nombre : 'Jose',
//     apellido: 'Simpson'
// } 
// let otraPersona = {
//     nombre : 'Marge',
//     apellido: 'Simpson'
// };
// let logNombre = function(){
//     console.log(    this.nombre
//         ) 
// } 

// logNombre.call(otraPersona)
// //apply


// let logApply = function(saludo, fin){
//     console.log( saludo + ' ' + this.nombre + fin )
// };

// logApply.apply(otraPersona, ['hola', '!!'] )

// function counter() {
//     let contador = 1;
//   return  function(){
//       return contador ++;
//   }
//   }
  
//   let sumadUno = counter();
//   console.log(sumadUno());
//   console.log(sumadUno());
//   console.log(sumadUno());

function cb (x){
return x*2
}

function cacheFunction(cb) {
    var cacheAcc = {};
  return function(arg){
    if (cacheAcc.hasOwnProperty(arg)) {
        return cacheAcc[arg]
    } else {
        return cacheAcc[arg] = cb(arg)
    }
  }
    
  };
