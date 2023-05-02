// // let newList = {
// //     head: null,
// //     size: 1
// // }

// // let node2 = {
// //     value: 33,
// //     next: null
// // }

// // console.log(nodo)

// //

// function List(){
//     this.size = 0;
//     this.head = null;
// }


// // function Node(value){
// //     this.value= value;
// //     this.next=null;
// // }

// // List.prototype.add= function(value){
// //     let newNode = new Node(value);
// //     let current = this.head;
// //     if (!current){
// //         this.head =  newNode;
// //         this.size ++;
// //         return newNode
// //     }
// //     while(current.next){
// //         current = current.next
// //     }
// //     current.next = newNode;
// //     this.size++;
// //     return newNode;
// // }


// // let newList = new List();
// // newList.add(5)
// // newList.add(9)
// // newList.add('asd')
// // console.log(newList);

// // //


// 'use strict';

// /* EJERCICIO 1
// Implementar la clase LinkedList, definiendo los siguientes métodos:
//   - add: agrega un nuevo nodo al final de la lista;
//   - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
//   - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
//   EJEMPLO 
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.
// */
// function LinkedList() {
//   this.size = 0;
//   this.head = null; 
// }
// function Node(value) {
//   this.value = value;
//   this.next = null;
// }
// LinkedList.prototype.add = function(value){
//   let nodo = new Node(value);
//   let current = this.head;
//   if(!current){
//      this.head = nodo;
//      this.size ++;
//      return nodo;
//   }
//   while(current.next){
//     current = current.next;
//   }
//     current.next = nodo;
//     this.size++;
//     return nodo;

//   }
//   LinkedList.prototype.remove = function(){
//     let current = this.head;
//     let value;
//     if(!current){
//       return null;
//     }
//     else if(this.size === 1){
//       value = this.head.value;
//       this.head = null;
//       this.size--;
//       return value;    }
//     else{
//       while(current.next.next){
//         current = current.next;
//       }

//       value = current.next.value;
//       current.next = null;
//       this.size--;
//       return value;
//     }
//   }
//   LinkedList.prototype.search = function(condition) {
//     let current = this.head;
    
//     while (current) {
//       if( typeof condition == 'function'){
//          if(condition(current.value))  return current.value;
//       }
//       else {
//         if (current.value === condition) {
//           return current.value;
//         }
//       }
//       current = current.next;
//     }
    
//     return null;
//   };


//   let a = new LinkedList();
  
//   a.add(7)
//   a.add(3)
//   a.add(8)
//   console.log(a)


// /* EJERCICIO 2
// Implementar la clase HashTable.
// Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
// Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

// La clase debe tener los siguientes métodos:
//   - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
//   - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
//   - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
//   - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

// Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
// */




function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
HashTable.prototype.hash = function (value){
  let valor = 0;
  for (let i = 0; i < value.length; i++) {
    valor = valor + value.charCodeAt(i);
  } 
  return valor % this.numBuckets;
}
let as = new HashTable();
as.hash('asd');
console.log(as)
console.log(as.keys(buckets))













    // - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, 
    //y almacena todo el conjunto en el bucket correcto.
    // HashTable.prototype.set = function(key, value){
    //   if(this.keys(this.buckets))
    //   return this.key.hash(key);

    // }
    // HashTable.prototype.set = function(key, value) {
    //   const index = this.hash(key);
    //   const bucket = this.buckets[index] || [];
    
    //   // Buscamos si ya existe un elemento en el bucket con la misma clave
    //   let found = false;
    //   for (let i = 0; i < bucket.length; i++) {
    //     const [k, v] = bucket[i];
    //     if (k === key) {
    //       bucket[i][1] = value;
    //       found = true;
    //       break;
    //     }
    //   }
    
    //   // Si no encontramos un elemento con la misma clave, lo agregamos al bucket
    //   if (!found) {
    //     bucket.push([key, value]);
    //   }
    
    //   this.buckets[index] = bucket;
    // };
    // HashTable.prototype.get = function(key) {
    //   const index = this.hash(key);
    //   const bucket = this.buckets[index] || [];
    
    //   // Buscamos el elemento con la clave que recibimos como parámetro
    //   for (let i = 0; i < bucket.length; i++) {
    //     const [k, v] = bucket[i];
    //     if (k === key) {
    //       return v;
    //     }
    //   }
    
    //   // Si no encontramos ningún elemento con la clave, retornamos undefined
    //   return undefined;
    // };