// // condiciones estructura
// //monoparental - unidireccional - prohibidos los nodos no conexos
// // es arbol si cada nodo cumple las condiciones de estructura
// //caada nodo es un nuevo arbol, x eso no es una linked list

// //ARBOL BINARIO como max dos hijos
// // de busqueda: los valores mas altos q su root a la derecha y menores a la izq
// //Balanceado cuando ambas ramas no difieren en mas de un nivel 

// //pre order primero nodo => izq der
// //in order izq nodo derecha
// //post order izq der act

// let BinarySearchTree = function(value){
//     this.value = value;
//     this.right = null;
//     this.left = null;
// }
// BinarySearchTree.add = function(value){
//     let newNode = new BinarySearchTree(value);
//     if(value <= this.value){

//     }
// }
// newTree = new BinarySearchTree();
// newTree.right = new BinarySearchTree(1);
// newTree.add(20)


// console.log(newTree)


'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree( data){
   this.data = data;
   this.left = null;
   this.right = null;
}
BinarySearchTree.prototype.size = function(){
   let counter = 0;
      if(!this.left && !this.right) return 1
      if (this.left && !this.right)return this.left.size() + 1;
      if(!this.left && this.right) return this.right.size()+ 1;
      else {return 1 + this.left.size() + this.left.size(); }
}

BinarySearchTree.prototype.insert = function(value) {
   if (value <= this.data) {
     if (!this.left) {
       this.left = new BinarySearchTree(value);
     } else {
       this.left.insert(value);
     }
   } else {
     if (!this.right) {
       this.right = new BinarySearchTree(value);
     } else {
       this.right.insert(value);
     }
   }
 };
 




BinarySearchTree.prototype.contains = function(value) {
   if (value === this.data) {
     return true;
   } else if (value < this.data) {
     if (!this.left) {
       return false;
     } else {
       return this.left.contains(value);
     }
   } else if (value > this.data) {
     if (!this.right) {
       return false;
     } else {
       return this.right.contains(value);
     }
   }
 }
//  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   let aux = [];
   if(!order || order === 'in-order'){
     if(this.left){
       this.left.depthFirstForEach(cb, order);
     }
     cb(this.data);
     if(this.right){
       this.right.depthFirstForEach(cb, order);
     }
   }
   else if(order === 'post-order'){
     if(this.left){
       this.left.depthFirstForEach(cb, order);
     }
     if(this.right){
       this.right.depthFirstForEach(cb, order);
     };
     cb(this.data);
   }
   else{
     cb(this.data);
     if(this.left){
       this.left.depthFirstForEach(cb, order);
     }
     if(this.right){
       this.right.depthFirstForEach(cb,order);
     }
   }
 }
 
 BinarySearchTree.prototype.breadthFirstForEach = function(cb) {
   let currentLevel = [this];
   while (currentLevel.length > 0) {
     let nextLevel = [];
     currentLevel.forEach(function(node) {
       cb(node.data);
       if (node.left) {
         nextLevel.push(node.left);
       }
       if (node.right) {
         nextLevel.push(node.right);
       }
     });
     currentLevel = nextLevel;
   }
 };



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

