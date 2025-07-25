import './App.css';
import Headers from "./component/layout/Header/Header.js";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from './component/Product/ProductDetails.js';

function App() {
  React.useEffect(() => {
   WebFont.load({
    google:{
      families:["Roboto", "Droid Sans", "Chilanka"]
    }
   })
  }, [])


  return (
    <Router>
       <Headers /> 
       <Route extact path='/' Component={Home}/>
       <Route extact path="/product/:id" Component={ProductDetails}/>
       

       <Footer />
    </Router>
  );
}

export default App;
