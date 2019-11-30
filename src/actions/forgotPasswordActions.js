import { SET_STEP, UPDATE_PHONENUMBER } from "./types";

export const setStep = (step) => dispatch => dispatch({ type: SET_STEP, payload: step });
export const updatePhone = (data) => dispatch => dispatch({ type: UPDATE_PHONENUMBER, payload: data })
