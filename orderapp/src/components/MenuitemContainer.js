import Menuitemcomponent from "./Menuitemcomponent.js";
import './MenuitemContainer.css';

function MenuitemContainer(props){

    return(
        <>
        <div className="displaycontainer">
            {props.itemData.map((element)=>{
                return <Menuitemcomponent id={element.id} data={element} addtocart={props.addtocart}/>;
            })}
        </div> 
        </>
    
    )
}

export default MenuitemContainer;