import API from './api/api';
import Footer from './parts/footer';
import Header from './parts/header';
import './App.css';

function App() {
  return (
    <div>
        {/* <Header className='header'/> */}

          <div className='header'>Header</div>

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
          
          
          <div className='header'>Footer</div>
        {/* <Footer className='footer'/> */}
    </div>
  );
}

export default App;
