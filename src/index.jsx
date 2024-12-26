import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loginpage from './login/login.jsx';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx'
import {productStore} from './redux/store.jsx'
import { Provider } from 'react-redux'
import Cart from './Cart/Cart.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={ <Loginpage />}/>
      <Route path='/' element={
        <Provider store={productStore}>
          <Home></Home>
        </Provider>
        }/>
        {/* <Route path='/cart' element={<Cart></Cart>} ></Route> */}
     <Route path='/Cart' element={<Cart></Cart>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
