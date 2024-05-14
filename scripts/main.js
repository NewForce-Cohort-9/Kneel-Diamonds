import { MetalOptions } from "./Metals.js"
import { StyleOptions } from "./JewelryStyles.js"
import { SizeOptions } from "./DiamondSizes.js"
import { PlaceOrder } from "./PlaceOrder.js"
import { Orders } from "./Orders.js"

const mainContainer = document.querySelector("#container")

export const render = async () => {
    const metalHTML = await MetalOptions()
    const styleHTML = await StyleOptions()
    const sizeHTML = await SizeOptions()
    const orderButtonHTML = await PlaceOrder()
    const orderHTML = await Orders()

    const composedHTML = `
    <h1>Kneel Diamonds</h1>

    <div class="container text-center">
  <div class="row justify-content-start">
    
    <div class="col align-self-start">
        <section class="choices__metals options">
            <h2>Choose Your Metal:</h2>
            ${metalHTML}
        </section>
        </div>
        <div class="col align-self-start">
        <section class="choices__sizes options">
            <h2>Choose Your Style:</h2>
            ${styleHTML}
        </section>
        </div>
        <div class="col align-self-start">
        <section class="choices__styles options">
        <h2>Choose Your Size:</h2>
        ${sizeHTML}
        </section>
        </div>
        </div>
        </div>

   

    <article>
        ${orderButtonHTML}

    </article>

    <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
        ${orderHTML}
    </article>
 
    `

    mainContainer.innerHTML = composedHTML
}

// document.addEventListener("newOrder", render)
document.addEventListener("newOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
render()