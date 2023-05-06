// // // 💛 REPASO SEMANA 1 DEL MÓDULO 1 💛

// // // EJERCICIO 1 - CLOSURES
// // // Crear un Stack mediante un Closure
// // //   El Stack debe permitir:
// // //     Agregar elementos: add
// // //     Remover elementos: remove
// // //     Retornar longitud del stack: size

// // function stack() {
// //     // Tu código aquí:
// //     let myStack = [];
// //     return {
// //       add: function(data) {
// //         myStack.push(data);
// //       },
// //       delete: function() {
// //         return myStack.pop();
// //       },
// //       size: function() {
// //         return myStack.length;
// //       }
// //     }
// //   }
// //   // Resultados esperados al invocar la función:
// //   console.log("----- Closures -----");
// //   var myStack = stack();
// //   myStack.add(5);
// //   console.log(myStack.size()); // 1 (devuelve longitud de miStack)
// //   myStack.add(7);
// //   myStack.add(9);
// //   console.log(myStack.size()); // 3 (devuelve longitud de miStack)
// //   console.log(myStack.delete()); // 9 (devuelve el elemento removido)
// //   console.log(myStack.size()); // 2 (devuelve longitud de miStack)
  
// //   // EJERCICIO 2 - RESOLVER EN FORMA RECURSIVA!!!
// //   // La función sumArray recibe un array de números enteros como argumento
// //   // Devuelve una suma de todos los elementos del array según lo siguiente:
// //   //   Si el número del array es par suma 0
// //   //   Si el número del array es impar suma 1
// //   // Ejemplos:
// //   //   [ 2, 4 ] --> Retorna 0, ya que ambos números son pares (0 + 0 = 0)
// //   //   [ 1, 4 ] --> Retorna 1, ya que solamente hay un número impar (1 + 0 = 1)
// //   //   [ 1, 3, 5 ] --> Retorna 3, ya que hay tres números impares (1 + 1 + 1 = 3)
  

// //  let array = [2,3,5,6,1,9]

// // function sumArray(array){
// //     if(array.length < 1) return 0;
// //     return (array.shift() % 2) + sumArray(array)
// // }

// // console.log(sumArray(array))





// //   function sumArray(arr) {
// //     // Tu código aquí:
// //     // Caso Base
// //     if(!arr.length) return 0;
// //     // Llamado recursivo
// //     return (arr.pop() % 2) + sumArray(arr);
// //   }
// //   // Resultados esperados al invocar la función:
// //   console.log("----- Recursión -----");
// //   console.log(sumArray([0])); // 0
// //   console.log(sumArray([0, 2, 4, 6])); // 0
// //   console.log(sumArray([0, 1, 2, 3])); // 2
// //   console.log(sumArray([0, 1, 2, 3, 5, 7])); // 4
// //   console.log(sumArray([1, 3, 5, 7, 9, 11])); // 6
  
// //   console.log([2].pop())
  
// //   // EJERCICIO 3 - LINKEDLIST
// //   // Crear la clase (o función constructora) LinkedList,
// //   //   la cual genere una lista simplemente enlazada.
// //   // Posee los siguientes constructores:
// //   //   LinkedList
// //   //   Node
// //   // Y los siguientes métodos:
// //   // 👉add: agrega nodo al final de la lista
// //   // 👉insertAt: agrega nodo en la posición pasada como argumento
// //   //             myList.insertAt(0) -> inserta en head
// //   // 👉removeFrom: remueve nodo en la posición pasada como argumento y devuelve su valor
// //   //               myList.removeFrom: remueve head de la lista
// //   // 👉removeElement: remueve nodo con el valor pasado como argumento y devuelve su valor; y null si no existe.
// //   //                  myList.removeElement(7): remueve el nodo cuyo valor es 7 (si existe)
// //   // 👉isEmpty: retorna true si la lista está vacía, false si no lo está
// //   // 👉getSize: retorna la longitud de la lista
// //   // 👉print: imprime en consola todos los elementos de la lista
  
// let LinkedList = function(){
//     this.head = this.head;
//     this.size = 0;
// }
// let Node = function(value){
//     this.value = value;
//     this.next = null;
// }


// LinkedList.prototype.add = function(value){
//     let nn = new Node(value);
//     let current = this.head;
//     if(!current){
//         this.head = new Node(value);
//         this.size++;
//         return nn;
//     }
//     while( current.next ){
//         current = current.next
//     }
//     current.next = nn;
//     this.size ++;
//     return nn;
// }

// let a =  new LinkedList();
// a.add(23)
// a.add(23)
// a.add(23)
// console.log(a)





// //   function LinkedList() {
// //     this.head = null;
// //     this._length = 0;
// //   }
    
// //   function Node(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
  
// //   function Node(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
    
// //   LinkedList.prototype.add = function (value) {
// //     let newNode = new Node(value);
// //     let current = this.head;
// //     // Lista vacía:
// //     if (!current) {
// //       this.head = newNode;
// //       this._length++;
// //       return;
// //     }
// //     // Lista NO vacía:
// //     while (current.next) {
// //       current = current.next;
// //     }
// //     current.next = newNode;
// //     this._length++;
// //     return;
// //   };
    
// //   LinkedList.prototype.size = function () {
// //     return this._length;
// //   };
    
// //   // Implementar el método "insertAt" dentro del prototype de BinarySearchTree
// //   //  que agrega nodos en la posición pasada por parámetro
   
// //   LinkedList.prototype.insertAt = function (value, index) {
// //     if (index < 0 || index > this._length) return null;
// //     var newNode = new Node(value);
// //     var current = this.head;
// //     var previous;
    
// //     if (index === 0) {
// //       // Indice = 0 -> Inserto en head
// //       newNode.next = current;
// //       this.head = newNode;
// //     } else {
// //       for (let i = 0; i < index; i++) {
// //         previous = current;
// //         current = current.next;
// //     }
// //       newNode.next = current;
// //       previous.next = newNode;
// //     }
// //     this._length++;
// //   };
  
// //   // Resultados esperados:
// //   console.log("----- LinkedList -----");
// //   var myList = new LinkedList();
// //   console.log(myList); // LinkedList { size: 0, head: null }
// //   myList.add(7);
// //   myList.insertAt(8, 0); // Inserta el valor 8 en la posición 0 (head)
// //   myList.insertAt(5, 1); // Inserta el valor 5 en la posición 0 (head)
// //   console.log(myList); // LinkedList { size: 1, head: Node { value: 7, next: null } }

function henryParty(arr) {
    let lista2 = new Queue()
    // Tu código aquí:
    if(!arr.length)  return false;
    console.log(arr[i])
    for (let i = 0; i < array.length; i++) {
        console.log(lista2)
        if(arr[i].ticket === 'VIP' || this.estado === 'Conocido')
        lista2.enqueue();
    }
    return lista2;
}
lista2.enqueue(3);

BinarySearchTree.prototype.obtenerPelicula = function(entrada) {
    if (!this.value) { // Si el nodo actual es null, no se encontró la película
      return null;
    }
  
    if (entrada.nombre === this.value.nombre && entrada.horario === this.value.horario) {
      // Si la película buscada es igual al valor del nodo actual, se encontró la película
      return this.value;
    } else if (entrada.nombre < this.value.nombre || (entrada.nombre === this.value.nombre && entrada.horario < this.value.horario)) {
      // Si la película buscada es menor al valor del nodo actual, buscar en la rama izquierda
      return this.left ? this.left.obtenerPelicula(entrada) : null;
    } else {
      // Si la película buscada es mayor al valor del nodo actual, buscar en la rama derecha
      return this.right ? this.right.obtenerPelicula(entrada) : null;
    }
  };
  
BinarySearchTree.prototype.obtenerPelicula = function(entrada){
    if(!this.value) return {};
    if(entrada.nombre === this.value.nombre && entrada.horario === this.value.horario ){
        return this.value;
    }

   else{
    if (this.left) {
      return  this.left.obtenerPelicula(entrada);
    }
    else if(!this.left){
       return this.right.obtenerPelicula(entrada);
    }
    return this.obtenerPelicula(entrada)
   }
    
}

// BinarySearchTree.prototype.obtenerPelicula = function (entrada) {
  let currentNode = this;

  while (currentNode) {
    if (entrada.nombre === currentNode.value.nombre && entrada.horario === currentNode.value.horario) {
      return [{ ...currentNode.value, ...entrada.cartelera }];
    } else if (entrada.horario < currentNode.value.horario) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return [];
};