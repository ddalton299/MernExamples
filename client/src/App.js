import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar'; 
import './App.css';
import ShoppingList from './components/shoppingList'; 
function App() {
  return (
    <div className="App">
     <AppNavbar/>
     <h1>Hello</h1>
     <ShoppingList/>
    </div>
  );
}

export default App;
