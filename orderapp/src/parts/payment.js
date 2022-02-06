import './payment.css';
import BillImg from '../assets/bill.png';

export default function Payment() {
    const handlePayment = () => {
        console.log("Payment button clicked!")
        alert("Server has been notified on call for payment.")
    }

    return (
        <img src={BillImg} 
            alt="payment icon" 
            style={{height: 45, width: 45}}
            onClick={handlePayment} />
    )
}