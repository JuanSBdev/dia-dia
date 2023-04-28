function sumaRecursiva (num){
    console.table(num)
    if(num < 1) return num;
    return num  + sumaRecursiva(num - 1);
};
console.log(sumaRecursiva(3))

// function nFactorial(n) {
//     if( n === 0 ) return 1;
//     return n * nFactorial(n - 1);
  
//   }
//   console.log(nFactorial(4))

// function sumaArreglo(arr){
// if(arr.length < 1) return 0;
//     let pn = arr.pop();
//     console.log( pn )
//     return pn + sumaArreglo(arr);
// }
// console.log(sumaArreglo([1,2,3,4]));



//estructura de datos
// let arr = [1, 2, 2, 6, 8, 8];
// let na = new Set(arr);
// console.log(na)
//methods has() - add() size()

// el this de add() llama a lo de su izquierda del punto
// function Stack(){
//     this.arr = [];
// }
// Stack.prototype.add = function(value){
//     this.arr.push(value)
// };



// let ns = new Stack();
// ns.add('52')
// console.log(ns)