import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import callAPIMiddleware from '../middlewares/callAPIMiddleware';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// https://redux.js.org/recipes/configuring-your-store
function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, callAPIMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export default configureStore;
