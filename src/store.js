import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import registerReducer from "./reducers/registerReducer";
import forgotPasswordReducer from "./reducers/forgotPasswordReducer";

const reducer = combineReducers({
    register: registerReducer,
    forgotPassword: forgotPasswordReducer
});

export default createStore(reducer,applyMiddleware(thunk))