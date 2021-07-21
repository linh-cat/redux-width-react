import {DEPOSIT, WITHDRAWER } from "../actions/actionTypes"

const reducer = (state = 0, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + action.payload
        case WITHDRAWER:
            return state - action.payload
        default:
            return state
    }
}

export default reducer