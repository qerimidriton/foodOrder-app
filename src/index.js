import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './Pages/Redux/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
 
</Provider>,
);

