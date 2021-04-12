import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import tagsReducer from "./tagsReducer";
import taskReducer from './taskReducer';

let reducers = combineReducers( {
    tags: tagsReducer,
    tasks: taskReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)))

export default store