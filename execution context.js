'use strict'

// car scope FUNCIÓN
//let scope blocque {  }
// solo las funciones generan un nuevo contexto de ejecucion
function cortar(ing1){
    console.log('cortar ' + ing1)
}

function comprar(ing){
    setTimeout(()=>{
console.log('agregar ' + ing)
    }, 4000)
}

function preparar(ing11, ing2){
cortar(ing11);
cortar(ing2);
comprar('sal ')
console.log('servir ');


}

preparar('tom', 'cebolla');





console.log(parseInt("09") // 09
); 