
// function BinarioADecimal(num) {
//     let res = 0;
//     let  j = 0;
//     for (let i = num.length -1 ; i >= 0; i--, j++ ) {
//         console.log(num[i])
//        if( num[i] === '1'){
//           res += Math.pow(2, j)
//        }
//     }
//     console.log(res)

//     return res;
//  }
//  BinarioADecimal('111');

function isPangram(string){
   //...
   // let res = string.split('')
   // let sec = res.filter(w => w !== ' ')
   // console.log(sec)
   // let third =  sec.includes('a' && 'b' && 'c' )
   // console.log(third)
   let res = string.toLowerCase();
   let res2 = res.split('').filter(w => w !== ' ')
   let res3 = res2.includes(w => /[a-z]/);
   console.log(res3);

 }
 isPangram('The quick brownñ fox jumps over the lazy dog')