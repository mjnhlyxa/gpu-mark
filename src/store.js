import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import rootReducer from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';

export const history = createBrowserHistory();

const initialState = {};



const epicMiddleware = createEpicMiddleware();


// const enhancers = [];
const middleware = [
    routerMiddleware(history),
    epicMiddleware,
];

// const composedEnhancers = compose(
//     applyMiddleware(...middleware),
//     ...enhancers,
// );
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
epicMiddleware.run(rootEpic);
// const store = createStore(
//     rootReducer,
//     initialState,
//     composedEnhancers,
// );

export default store;
