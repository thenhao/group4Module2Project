import './server.css';
import BellImg from '../assets/bell.png';

export default function Server() {
    const handleServer = () => {
        console.log("Server called!")
        alert("A server will be with you shortly.")
    }

    return (
        <img src={BellImg} 
            alt="payment icon" 
            style={{height: 45, width: 40}}
            onClick={handleServer} />
    )
}