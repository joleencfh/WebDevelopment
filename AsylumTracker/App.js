import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ScreenNavigator from './ScreenNavigator';
import docsReducer from './store/DocsReducers';

const rootReducer = combineReducers({
  docs: docsReducer
})

const store =createStore(rootReducer);

export default function App() {
 
  return (
        //wrap it all in the Provider and pass the store through the "store" prop
  <Provider store = {store}>
    <ScreenNavigator/>
  </Provider>
  );
}

