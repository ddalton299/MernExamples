import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar'; 
import './App.css';
import ShoppingList from './components/shoppingList'; 
import {Provider} from 'react-redux'; 
import store from './store'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AppNavbar/>
      <h1>Hello</h1>
      <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;
