import React, { Component } from "react";
import { accommodations } from "./data/data";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home";
import Header from "./components/header/header";
import About from "./pages/about/about";
import "./style/app.css";
import Footer from "./components/footer/footer";
import Accomodations from "./pages/accomodations/accomodations";
import Error from "./pages/error-404/error-404";


class App extends Component {

  

  constructor(props) {
   
    super(props);

    this.state = {
        accommodations: accommodations,
    };
}
  

  render() {
    
    

    const {accommodations} = this.state
    
    return (

      
      <Router>
        <div className="App">
          <Header className='Header'/>
          <Routes>
          <Route  path='/' element={<Home accommodations={accommodations}/>}/>
          <Route  path='/a-propos' element={<About accommodations={accommodations} />}/>
  
          <Route  path="/accommodations/:id" element={<Accomodations accommodations={accommodations}  />}/>
          <Route path="*"  element={<Error />}/>
          </Routes>
          <Footer />
          
          
        </div>
      </Router>
    );
  }
}

export default App;
