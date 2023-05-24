export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
//ACTIONS CREATORS 
export  const increment = ()=>{
    return{
        type: INCREMENT
    }
}
export  const decrement = ()=>{
    return{
        type: DECREMENT
    }
}