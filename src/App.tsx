import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Store from './features/Store';
import Index from './Pages/Index';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
    <Index/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
