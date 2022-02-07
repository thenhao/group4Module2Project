import { useRef } from 'react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Trialemail(props){

    // const [savelist, setSavelist] = useState([]);
    // setSavelist(props.selectedItemList);
    let itemmessage ='';
    let quantitymessage= '';
    let pricemessage = '';

    console.log(props.selectedItemList);
    
    props.selectedItemList.forEach(element => {
        itemmessage += ("" + element.name+"    "+element.quantity+"    "+ element.price*element.quantity + "\n");
        // quantitymessage += ("\n"+ element.quantity +"    "+ "\n");
        // pricemessage += ("\n"+ element.price*element.quantity+"    "+ "\n");
        });

    console.log("message is");
    console.log(itemmessage, quantitymessage, pricemessage);

    var templateParams = {
         item: itemmessage,
        // q:quantitymessage,
        // p:pricemessage

    };

    
    async function handlesubmit(e){
        e.preventDefault();

        await emailjs.send('service_rn5pk3c', 'template_w05vkki', templateParams, 'user_AEhO0hVBtk1r9gtd1od2x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
    <>
    <button onClick={handlesubmit}>Click to send order</button>  
    </>
    )
}

export default Trialemail;