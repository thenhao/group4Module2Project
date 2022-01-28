import API from './api/api';
import React, {useState, useEffect} from 'react';
import Footer from './parts/footer';
import Header from './parts/header';
import './App.css';
import Menuitemcomponent from './components/Menuitemcomponent.js';

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

  // const [revisedMenu, setRevisedMenu] = useState([]);

  return (
    <div>
      {/* <Menuitemcomponent data={menu[0]}/> */}
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
    </div>
  );
}

export default App;
