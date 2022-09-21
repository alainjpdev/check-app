
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes} from "react-router-dom" 
import React from 'react';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import SpecialEditions from './components/pages/SpecialEditions';
import AboutUs from './components/pages/AboutUs';
import Faq from './components/pages/Faq';
import Specs from './components/pages/Specs';
import News from './components/pages/News';
import Footer from './components/Footer';
import Cart from './components/pages/Cart';
import HomeMark from './components/pages/HomeMark';




function App() {
  return (
    <> 
    <div className="wraper">
     
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/mark"  element={<HomeMark/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/specialeditions" element={<SpecialEditions/>}/>
          <Route path="/aboutus"element={<AboutUs/>}/>
          <Route path="/faq" element={ <Faq/> }/> 
          <Route path="/specs" element={<Specs/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/specialeditions" element={<SpecialEditions/>}/>
          <Route path="/cart" element={<Cart/>}/>
         
        </Routes>
        <Footer/>
      
      </div>
    </>
  );
}

export default App;
