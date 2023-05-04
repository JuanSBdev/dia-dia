

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] > array[j]  ) {
                let a = array[j];
                let b = array[i];
                array[i] = a;
                array[j] = b;            }
            }
        }
        return array;    
        console.log(array)
}
bubbleSort([3,6,5,7])
function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
  
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
  
    return array;
  }
  
  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    
    for (let i = 0; i < array.length; i++) {
          let a = array[i];
        for (let j = i +1; j < array.length; j++) {
          if(i < j){
            a = i;
          }
        }
    }
    return array
  }
  console.log(selectionSort([3,5,7,2,8]))