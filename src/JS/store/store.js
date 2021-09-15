import {createStore} from "redux"
import reducerCounter from "../reducers/reducerCounter"


const store= createStore(reducerCounter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store