function Custombutton(props){

    return(
        <>
            <button onClick={props.click}>{props.sign}</button>
        </>
    )
}

export default Custombutton;