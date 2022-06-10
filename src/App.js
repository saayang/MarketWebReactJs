import React, { Component } from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList/>}/>
          <Route path="/Details" element={<Details/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="*"element={<Default/>}/>

        </Routes>
        <Modal/>
      </React.Fragment>
      </div>
    );
  }
}

export default App;
