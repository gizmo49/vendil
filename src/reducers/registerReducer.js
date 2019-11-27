import {SET_STEP, UPDATE_PHONENUMBER} from "../actions/types";

const initState = {
    currentStep: 1,
    phoneNumber:""
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_STEP:
            return { ...state, currentStep: action.payload }
        case UPDATE_PHONENUMBER:
            return {...state, phoneNumber: action.payload, currentStep:2 }
        default:
            return state
    }
}