import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from "../JS/actions/actionCounter"

const Counter = (props) => {
    return (
        <div>
            <h3>{props.counter}</h3>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement} >-</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment())
//     }
// }

// const mapDispatchToProps={
//     increment,
//     decrement
// }



// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, {increment, decrement, reset})(Counter);
