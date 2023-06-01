import { createStore, applyMiddleware, compose } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';
//import reducer from '../reducers/reducer';
import rootReducer from '../reducers/reducer';
import thunkMiddleware from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);
//const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;