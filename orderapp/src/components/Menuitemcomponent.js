import Custombutton from "./buttons/Custombutton";


function Menuitemcomponent(props){
    const containerStyle = {
        width: "600px",
        height: "600px",
      };
    return(
        <>
        <div className="itemcomponent">
                {/* <img style={containerStyle} id="itemimage" src={props.data.src}></img> */}
                <div>
                    <label>{props.data.name}</label>
                    <label>{props.data.price}</label>
                </div>
                
                <Custombutton sign="-"/>
                <input type="text" value="1"></input>
                <Custombutton sign="+"/>
                <button>Add</button>
        </div>
            
        </>
    )
}

export default Menuitemcomponent;