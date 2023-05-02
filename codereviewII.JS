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
      if(typeof key != 'string'){
          throw new TypeError('Keys must be strings')
        }
        let index = this.hash(key);
        //si colisiona hacemos que las posiciones sean objetos
        if(!this.buckets[index]){
            this.buckets[index] = {};
        }
    this.buckets[index][key] = value;
  }

  HashTable.prototype.get = function(key){
    let index = this.hash(key);
    return this.buckets[index][key];

  }
  HashTable.prototype.hasKey = function(key){
    let index = this.hash(key);
    if(this.buckets[index][key]){
        return true;
    }
    return false;
  }
  
  let nTable = new HashTable();
  console.log(  nTable.hash('sies'))
  console.log(nTable.numBuckets)    