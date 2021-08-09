import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer';
import { coinReducer } from './reducers/coinReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

    console.log(store)
// const store = createStore(coinReducer)

 export default store;