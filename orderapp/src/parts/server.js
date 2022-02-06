export default function Server() {
    const handleServer = () => {
        console.log("Server called!")
        alert("A server will be with you shortly.")
    }

    return (
        <img src="https://icons-for-free.com/iconfiles/png/512/bell-131965017347068855.png" 
            alt="server icon" 
            style={{height: 45, width: 40}}
            onClick={handleServer} />
    )
}