import API from './api/api.js';
import React, {useState, useEffect} from 'react';
// import Footer from './parts/footer.js';
// import Header from './parts/header.js';
import MenuitemContainer from './components/MenuitemContainer.js';
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

  //default state for pass item to orderlist
  const defaultState = {
    name:"",
    price:0,
    quantity:0
  };

  //state for storing the item to be passed to orderlist
  const [additem, setAddItem] = useState(defaultState);

  //function to pass the item to the cart
  function AddItemToCart(itemobject){
    const toCartObject = {...itemobject};
    setAddItem(toCartObject);
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
      <MenuitemContainer className="maincontainer" itemData={menu} addtocart={AddItemToCart}/>
         

      
  
      
      {/* <img src={imageaddress} id="imagetest"/> */}
      {/* <Menuitemcomponent info={menu[0]}/> */}

        {/* <Header className='header'/> */}

          {/* <div className='header'>Header</div>

          <div className='navbarcontainer'>
              <div className='navbar'>Navbar</div>
              <div className='server'>Call Server</div>
          </div>
          
          <div className='maincontainer'>
            <div className='menuitemcontainer'>MenuitemContainer
                <div className='menu'>
                    MenuItems
                </div>
            </div>
            <div className='orderlistcontainer'>OrderListContainer
                <div className='order'>
                    OrderList
                </div>
            </div>
          </div>
          
          
          <div className='header'>Footer</div> */}
        {/* <Footer className='footer'/> */}
    </>
  )
}

export default App;
