import {SET_STEP} from "../actions/types";

const initState = {
    currentStep: 1,
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_STEP:
            return { ...state, currentStep: action.payload }
        default:
            return state
    }
}