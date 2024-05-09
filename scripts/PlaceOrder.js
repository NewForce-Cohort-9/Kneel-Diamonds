import { saveOrder } from "./TransientState.js"

export const PlaceOrder = () => {
    
    const handleSaveOrder = (e) => {
        if(e.target.id === "orderButton"){
                saveOrder()
            }
    }
    
    document.addEventListener("click", handleSaveOrder)
    return `<button id="orderButton">Create Custom Order</button>`
}