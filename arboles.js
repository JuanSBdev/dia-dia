// condiciones estructura
//monoparental - unidireccional - prohibidos los nodos no conexos
// es arbol si cada nodo cumple las condiciones de estructura
//caada nodo es un nuevo arbol, x eso no es una linked list

//ARBOL BINARIO como max dos hijos
// de busqueda: los valores mas altos q su root a la derecha y menores a la izq
//Balanceado cuando ambas ramas no difieren en mas de un nivel 

//pre order primero nodo => izq der



let BinarySearchTree = function(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
BinarySearchTree.add = function(value){
    let newNode = new BinarySearchTree(value);
    if(value <= this.value){

    }
}
newTree = new BinarySearchTree();
newTree.right = new BinarySearchTree(1);
newTree.add(20)


console.log(newTree)