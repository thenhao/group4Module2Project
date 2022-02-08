import {v4 as uuid} from 'uuid';

export default function Invoice({id}) {
    
    console.log("Order Id:", id);

return (
    <p style={{textAlign: "center", fontFamily: "Yomogi, cursive", fontWeight: "bold"}}><strong>Invoice number:</strong>&nbsp;{id}</p>
)
}