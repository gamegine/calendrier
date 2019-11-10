import { createStore, applyMiddleware } from 'redux';
import event from './reducers/event';
import thunk from "redux-thunk";

export default createStore(event, applyMiddleware(thunk));