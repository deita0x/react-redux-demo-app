import { createStore, applyMiddleware } from 'redux';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      reduxInmutableStateInvariant()
    ) 
  );
}