import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import registerReducer from "./reducers/registerReducer";

const reducer = combineReducers({
    register: registerReducer
});

export default createStore(reducer,applyMiddleware(thunk))