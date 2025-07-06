import './App.css';
import Headers from "./component/layout/Header.js";
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from "webfontloader";
import React from 'react';



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
    </Router>
  );
}

export default App;
