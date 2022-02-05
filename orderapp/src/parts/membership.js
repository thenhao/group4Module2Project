import { useRef } from 'react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import MemberPopup from '../components/popup/memberpopup';
import "./membership.css";

function Membership(){
    const form = useRef();
        //list of things that need to have the tags
        // Form
        // -reply_to
        // -name or firstname/lastname
        // -button to submit

    function handlesubmit(e){
        e.preventDefault();

        emailjs.sendForm('service_rn5pk3c', 'template_jbyy01u', form.current, 'user_AEhO0hVBtk1r9gtd1od2x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    return <div>

        <img className='imageicon' src="https://www.clipartmax.com/png/full/437-4379862_signup-icon-signup-sign-up-icon.png" 
            alt="sign up icon" 
            style={{height: 35, width: 40}}
            onClick={togglePopup} />
        
        {isOpen && <MemberPopup
        content={<>
            <div className='signupcontainer'>
                <div className='formcontainer'>
                    <div className='signuptitle'>Ambrosial</div>
                    <div className='signupsubtitle'>Create an account</div>
                    <br></br>
                    <form ref={form} onSubmit={handlesubmit}>
                        
                        <input className='inputvalue' type="text" placeholder="Your Username" name="username" size="50"></input>
                        <br></br><br></br>
                        <br></br>
                        <input className='inputvalue' type="text" placeholder="Your Password" name="password" size="50"></input>
                        <br></br><br></br>
                        <br></br>
                        <input className='inputvalue' type="text" placeholder="Your Firstname" name="firstname" size="50"></input>
                        <br></br><br></br>
                        <br></br>
                        <input className='inputvalue' type="text" placeholder="Your Lastname" name="lastname" size="50"></input>
                        <br></br><br></br>
                        <br></br>
                        <input className='inputvalue' type="email" placeholder="Your Email" name="reply_to" size="50"></input>
                        <br></br>
                        <div className='inputcheckboxcontainer'><input className='inputcheckbox' type="checkbox"></input>I dont want to receive promotional emails from Ambrosial</div>
                        <br></br>
                        <div className='signupagreement'>By clicking the "Sign Up" button, you are creating an Ambrosial account, and you agree 
                            to Ambrosial's Terms of Use and Privacy Policy</div>
                        <br></br>    
                        <button className='signupbutton'>Sign Up</button>
                    </form>
                </div>

                {/* <div className='signupimagecontainer'>
                    <img className='signupimage' src='https://i.pinimg.com/564x/7f/46/01/7f4601590ac18fa36848098624ba9dfe.jpg'></img>
                </div> */}

            </div>
        </>}
        handleClose={togglePopup}
        />}
    </div>
}

export default Membership;