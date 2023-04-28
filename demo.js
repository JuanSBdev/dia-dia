
function BinarioADecimal(num) {
    let res = 0;
    let  j = 0;
    for (let i = num.length -1 ; i >= 0; i--, j++ ) {
        console.log(num[i])
       if( num[i] === '1'){
          res += Math.pow(2, j)
       }
    }
    console.log(res)

    return res;
 }
 BinarioADecimal('111');