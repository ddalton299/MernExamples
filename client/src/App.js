import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar'; 
import './App.css';
import ShoppingList from './components/shoppingList'; 
import {Provider} from 'react-redux'; 
import store from './store'; 
import ItemModal from './components/itemModal'; 
import {Container} from 'reactstrap'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AppNavbar/>
      <Container>
        <ItemModal/>
        <ShoppingList/>
      </Container>
      
    </div>
    </Provider>
  );
}

export default App;
