import API from './api/api';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/home/home';
import Appetizer from './pages/appetizer/appetizer';
import Main from './pages/main/main';
import Beverage from './pages/beverage/beverage';
import Dessert from './pages/dessert/dessert';
import Footer from './parts/footer';
import Header from './parts/header';
import Payment from './parts/payment';
import Server from './parts/server';
import CartItems from './components/CartItems';
import './App.css';


function App() {
  const [menu, setMenu] = useState([]);
  
    const getMenuAPI = async () => {
    const {status, data} = await API.get("/menu");
      console.log("Status", status);
      console.log("Data", data)
    if (status === 200) {
        setMenu(data)
    }
  }

  useEffect(() => {
    console.log("useEffect");
    getMenuAPI();
  },[]);

  return (
    <div>
        {/* <Header className='header'/> */}

          <div className='header'>Header</div>

          <div className='navbarcontainer'>
            <Router>
              <div className="navbar">
                <Link to="/pages/home/home"><button className="pages">Home</button></Link>
                <Link to="/pages/appetizer/appetizer"><button className="pages">Appetizer</button></Link>
                <Link to="/pages/main/main"><button className="pages">Main</button></Link>
                <Link to="/pages/beverage/beverage"><button className="pages">Beverage</button></Link>
                <Link to="/pages/dessert/dessert"><button className="pages">Dessert</button></Link>
              </div>
              <div className="main">
                <Switch>
                  <Route path="/pages/home/home"><Home /></Route>
                  <Route path="/pages/appetizer/appetizer"><Appetizer /></Route>
                  <Route path="/pages/main/main"><Main /></Route>
                  <Route path="/pages/beverage/beverage"><Beverage /></Route>
                  <Route path="/pages/dessert/dessert"><Dessert /></Route>
                </Switch>
              </div>
              </Router>
              <div className='server'><Server /></div>
              <div className='payment'><Payment /></div>
          </div>
          
          <div className='maincontainer'>
            <div className='menuitemcontainer'>
                <div className='menu'>
                    MenuItems
                </div>
            </div>
            <div className='orderlistcontainer'>OrderListContainer
                <div className='order'>
                    OrderList
                    <CartItems/>
                </div>
            </div>
          </div>
          
          
          <div className='header'>Footer</div>
        {/* <Footer className='footer'/> */}
    </div>
  );
}

export default App;
