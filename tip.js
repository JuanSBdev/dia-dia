function intersection(arr1, arr2){
    const result = []
    for( const num1 of arr1){
        if(arr2.includes(num1)){
            result.push(num1)
        }
    
    }
    return result;
}

console.log(intersection([1,2,4,6,8], [2, 8, 5]))

// function intersection(arr1, arr2) { 
//     const set = new Set(arr1) 
//     const result = [] 
//     for (const num2 of arr2) { 
//       if (set.has(num2)) { 
//         result.push(num2) 
//       } 
//     } 
//     return result 
//   } 
   
//   console.log(intersection([1,2,4,6,8], [2, 8, 5]))