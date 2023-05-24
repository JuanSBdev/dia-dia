
import React, { Component}  from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from './redux/actions';
class Contadors extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>CONTADOR REDUX</h1>
                <h2>{this.props.contador}</h2>
                <button onClick={this.props.sumar}>b</button>
                <button onClick={this.props.decrement}>dec</button>
            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    return {
        contador: state.contador
    }
};
//que quiero desapchar
const mapDispatchToProps = (dispatch)=>{
    return {
        // que quiero hacer
        // increment: ()=>{dispatch({type:'INCREMENT'})}
         sumar: ()=>{dispatch(increment())},
         decrement: ()=>{dispatch(decrement())}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contadors);