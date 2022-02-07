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
import Membership from './parts/membership.js';
import OrderList from './parts/orderlist.js';

import CartItems from './components/CartItems';
import OrderlistSendBtn from './components/OrderlistSendBtn';
import AddedItem from './components/OrderlistContainer.js';
// import MenuitemContainer from './components/MenuitemContainer.js';
import CategoryData from './components/CategoryData.js';
import TotalBillCalculator from "./components/TotalBillCalculator.js";

import './App.css';
import './components/OrderlistSendBtn.css';


function App() {
  const [menu, setMenu] = useState([]);

  const getMenuAPI = async () => {
    const { status, data } = await API.get("/menu");
    console.log("Status", status);
    console.log("Data", data);
    if (status === 200) {
      setMenu(data);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    getMenuAPI();
  }, []);

  //default state for pass item to orderlist
  const defaultState = {
    name: "",
    price: 0,
    quantity: 0,
  };

  //state for storing the item to be passed to orderlist
  const [additem, setAddItem] = useState(defaultState);

  // to be printed as default on the order list
  const [selectedItemList, setSelectedItemList] = useState([]);

  //function to pass the item to the cart
  function AddItemToCart(itemobject) {
    const toCartObject = { ...itemobject };
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
  
  // state for storing the subpage status
  const [pageState, setPageState] = useState('');
  

  return (
    <>
      <div className="header">
        <Header/>
      </div>

      <div className='navbarcontainer'>
        <Router>
          <div className="navbar">
            <Link to="/"><button onClick={()=> {setPageState("Home")}} className={pageState === "Home"? "selected-page" : "pages"}>Home</button></Link>
            <Link to="/pages/appetizer"><button onClick={()=> {setPageState("Appetizers")}} className={pageState === "Appetizers"? "selected-page" : "pages"}>Appetizers</button></Link>
            <Link to="/pages/main"><button onClick={()=> {setPageState("Mains")}} className={pageState === "Mains"? "selected-page" : "pages"}>Mains</button></Link>
            <Link to="/pages/beverage"><button onClick={()=> {setPageState("Beverages")}} className={pageState === "Beverages"? "selected-page" : "pages"}>Beverages</button></Link>
            <Link to="/pages/dessert"><button onClick={()=> {setPageState("Desserts")}} className={pageState === "Desserts"? "selected-page" : "pages"}>Desserts</button></Link>
            <span className='orderlist'><OrderList selectedItemList={selectedItemList} setSelectedItemList={setSelectedItemList}/></span>
            <span className='signup'><Membership/></span>
            <span className='server'><Server /></span>
            <span className='payment'><Payment /></span>
            {/* <span className='signin'><SignIn/></span> */}
          </div>
          <div className='menuitemcontainer'>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/pages/appetizer"><Appetizer data={menu} addtocart={AddItemToCart} type={CategoryData[0]}/></Route>
              <Route path="/pages/main"><Main data={menu} addtocart={AddItemToCart} type={CategoryData[1]}/></Route>
              <Route path="/pages/beverage"><Beverage data={menu} addtocart={AddItemToCart} type={CategoryData[2]}/></Route>
              <Route path="/pages/dessert"><Dessert data={menu} addtocart={AddItemToCart} type={CategoryData[3]}/></Route>
            </Switch>
             
          </div>
        </Router>
        {/* <div className='orderlistcontainer'>
          <div className='order'>
            <CartItems className='cartlist-container' selectedItemList={selectedItemList} setSelectedItemList={setSelectedItemList}/>  
            <TotalBillCalculator selectedItemList={selectedItemList} />              
            <OrderlistSendBtn selectedItemList={selectedItemList}/>
          </div>
        </div> */}
      </div>

          
      <div className='footer'>
        <Footer/>
      </div> 

    </>
  );
}

export default App;
