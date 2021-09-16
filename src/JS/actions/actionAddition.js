import { ADDITION } from "../constants/actionsTypes"


export const addition = (payload) => {
    return {
        type: ADDITION,
        payload
    }
}