import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores/RootStore';
const rootStoreInstance = new RootStore();
export const RootStoreContext = React.createContext(rootStoreInstance);

ReactDOM.render(
  <RootStoreContext.Provider value={rootStoreInstance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RootStoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
