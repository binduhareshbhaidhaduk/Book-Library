import { createStore ,applyMiddleware, compose } from 'redux';
import RootReducer from './Services/Reducer';
import { thunk } from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware=[thunk]
const store = createStore( 
    RootReducer, 
    composeEnhancers(applyMiddleware(...middleware))
)

export default store;

