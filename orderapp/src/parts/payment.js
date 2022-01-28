export default function Payment() {
    const handlePayment = () => {
        console.log("Payment button clicked!")
        alert("Server has been notified on call for payment.")
    }

    return (
        <img src="https://icons-for-free.com/iconfiles/png/512/dollar+funds+hand+payment+icon+icon-1320086640827007356.png" 
            alt="payment icon" 
            style={{height: 40, width: 40}}
            onClick={handlePayment} />
    )
}