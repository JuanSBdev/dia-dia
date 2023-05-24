import { DECREMENT, INCREMENT } from "./actions";

const initialState= {
    contador: 0,
}
const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                contador: state.contador + 1,
            }
        case DECREMENT:
            return{
                ...state,
                contador: state.contador - 1,
            }
        default:
            return{
                ...state
            }
    }
}
export default reducer;