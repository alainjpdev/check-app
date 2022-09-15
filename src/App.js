
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom" 
import React from 'react';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import SpecialEditions from './components/pages/SpecialEditions';
import AboutUs from './components/pages/AboutUs';
import Faq from './components/pages/Faq';
import Specs from './components/pages/Specs';
import News from './components/pages/News';
import Footer from './components/Footer';
import {createBrowserHistory} from 'history';
import Cart from './components/pages/Cart';

export const customHistory = createBrowserHistory(); 


function App() {
  return (
    <> 
    <div className="wraper">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/specialeditions" exact component={SpecialEditions}/>
          <Route path="/aboutus" exact component={AboutUs}/>
          <Route path="/faq" exact component={ Faq }/>
          <Route path="/specs" exact component={Specs}/>
          <Route path="/news" exact component={News}/>
          <Route path="/specialeditions" exact component={SpecialEditions}/>
          <Route path="/cart" exact component={Cart}/>
         
        </Switch>
        <Footer/>
      </Router>
      </div>
    </>
  );
}

export default App;
