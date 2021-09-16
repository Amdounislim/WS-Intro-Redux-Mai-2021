import { ADDITION } from "../constants/actionsTypes"


const initialState={
    sum:0
}

const reducerAddition = (state=initialState, action)=>{
    if(action.type===ADDITION){
        return {...state, sum: +action.payload.x + +action.payload.y}
    }
    else{
        return state
    }
}

export default reducerAddition