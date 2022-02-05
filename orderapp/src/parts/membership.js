import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Membership(){

    const form = useRef();
        //list of things that need to have the tags
        // Form
        // -reply_to
        // -name or firstname/lastname
        // -button to submit
    function Membershipcomponent(){
        return(<div>
            <form ref={form} onSubmit={handlesubmit}>
                <input type="text" placeholder="Firstname here" name="firstname"></input>
                <input type="text" placeholder="Lastname here" name="lastname"></input>
                <input type="email" placeholder="Email here" name="reply_to"></input>
                <button>Register</button>
            </form>
        </div>)
    }

    function handlesubmit(e){
        e.preventDefault();

        emailjs.sendForm('service_rn5pk3c', 'template_jbyy01u', form.current, 'user_AEhO0hVBtk1r9gtd1od2x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <Membershipcomponent/>
        </>
    )
}

export default Membership;