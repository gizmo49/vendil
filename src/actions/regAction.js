import { SET_STEP } from "./types";

export const setStep = (step) => dispatch => dispatch({ type: SET_STEP, payload: step });
