import API from './api/api.js';
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
import OrderlistSendBtn from './components/OrderlistSendBtn';
import AddedItem from './components/OrderlistContainer.js';
import MenuitemContainer from './components/MenuitemContainer.js';

import './App.css';
import './components/OrderlistSendBtn.css';



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

  //default state for pass item to orderlist
  const defaultState = {
    name:"",
    price:0,
    quantity:0
  };

  //state for storing the item to be passed to orderlist
  const [additem, setAddItem] = useState(defaultState);

  // to be printed as default on the order list
  const [selectedItemList, setSelectedItemList] = useState([]); 

  //function to pass the item to the cart
  function AddItemToCart(itemobject){
    const toCartObject = {...itemobject};
    setAddItem(toCartObject);
    AddedItem(toCartObject, selectedItemList, setSelectedItemList); // function call to pass the obj to OrderlistContainer
    //console.log("additem is", additem);
  }

  //funtion to clear the additem so that it can be ready for the next item to pass
  function ClearAddItem() {
    setAddItem(defaultState);
    console.log("item has been added to cart");
  }

  useEffect(() => {
    console.log("additem is", additem);
  },[additem]);
  
  return (
    <>
      
          <div className='header'>Header</div>

          <div className='navbarcontainer'>
            <Router>
              <div className="navbar">
                <Link to="/pages/home/home"><button className="pages">Home</button></Link>
                <Link to="/pages/appetizer/appetizer"><button className="pages">Appetizer</button></Link>
                <Link to="/pages/main/main"><button className="pages">Main</button></Link>
                <Link to="/pages/beverage/beverage"><button className="pages">Beverage</button></Link>
                <Link to="/pages/dessert/dessert"><button className="pages">Dessert</button></Link>
              <span className='server'><Server /></span>
              <span className='payment'><Payment /></span>
              </div>
              <div className='menuitemcontainer'>
                <Switch>
                  <Route path="/pages/home/home"><Home /></Route>
                  <Route path="/pages/appetizer/appetizer"><Appetizer /></Route>
                  <Route path="/pages/main/main"><Main /></Route>
                  <Route path="/pages/beverage/beverage"><Beverage /></Route>
                  <Route path="/pages/dessert/dessert"><Dessert /></Route>
                </Switch>
                <MenuitemContainer className="maincontainer" itemData={menu} addtocart={AddItemToCart}/>
              </div>
            </Router>
            <div className='orderlistcontainer'>OrderListContainer
                <div className='order'>
                    OrderList

                  <CartItems selectedItemList={selectedItemList} setSelectedItemList={setSelectedItemList}/>                
                  <OrderlistSendBtn />

                </div>
            </div>
          </div>
          
          
          <div className='header'>Footer</div> 
        {/* <Footer className='footer'/> */}
    </>
  )
}

export default App;
