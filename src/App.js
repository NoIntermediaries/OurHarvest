import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Farms from './components/Farms';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FarmDetail from './components/FarmDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main-wrapper">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/farms' component={Farms} />
            <Route path='/Contact' component={Contact} />
            <Route path='/:post_id' component={FarmDetail} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
