import {useState} from 'react';
import Custombutton from "./buttons/Custombutton";
import './Menuitemcomponent.css';

function Menuitemcomponent(props){
    
    const [itemCount, setItemCount] = useState(1);

    //minus function for subtracting the item quantity. For - button
    function minus(){
        if(itemCount > 1){
            const updatedCount = itemCount - 1;
            setItemCount(updatedCount);
        }

        console.log('button has been clicked in minus and itemcount is:', itemCount);
    }

    //plus function for adding the item quantity For + button
    function plus(){
        if(itemCount >= 1){
            const updatedCount = itemCount + 1;
            setItemCount(updatedCount);
        }

        console.log('button has been clicked in plus and itemcount is:', itemCount);
    }

    //sendtoorder function is to send item to order list
    let itemDetails = {
        name:"",
        price:0,
        quantity:0
      };
    function sendtoorder(){
        //this should be inside the parent so that it can be passed to orderlist.
        //put at the common parent of orderlist and menuitem
        const itemDetailsLink = {
            name:props.data.name,
            price:props.data.price,
            quantity:itemCount
        }
        itemDetails = itemDetailsLink;
        props.addtocart(itemDetails);
    }

    return(
             <div className="itemcomponent">
                 
                <div id="imagecontainer">
                    <img src={props.data.src} id="image" alt={props.data.alt}/>
                </div>

                 <div>
                     <label>{props.data.name}</label>
                     <label>${props.data.price}</label>
                 </div>
                
                <div>
                    <Custombutton className="minusbutton" sign="-" click={minus}/>
                    <input type="text" value={itemCount}></input>
                    <Custombutton className="plusbutton" sign="+" click={plus}/>
                </div>
                 
                 <button className='addbutton' onClick={sendtoorder}>Add</button>
            </div>
        
    
    )
}

export default Menuitemcomponent;