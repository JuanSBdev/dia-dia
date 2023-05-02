//CODE REVIEW DE ESTRUCTURA DE DATOS II
//HASH TABLE Y LINKED LIST
function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
  }
   
  
  
  HashTable.prototype.hash = function (str){
    let suma = 0;
    for (let i = 0; i < str.length; i++) {
      suma = suma + str.charCodeAt(i);
      console.log(suma)
    }
    return suma % this.numBuckets;
  }
  HashTable.prototype.set = function(key, value){
    let index = this.hash(key);
    this.buckets[index] = value;
  }
  HashTable.prototype.get = function(key){
    let index = this.hash(key);
    return this.buckets[index];

  }
  HashTable.prototype.hasKey = function(){
  }
  
  let nTable = new HashTable();
  console.log(  nTable.hash('sies'))
  console.log(nTable.numBuckets)    