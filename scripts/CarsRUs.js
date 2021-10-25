import { Interiors } from "./interior.js"

import { PaintColors } from "./paintColor.js"
import { Technology } from "./technology.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./customOrder.js"



document.addEventListener(
    "click",
    (event) => { if(event.target.id === "orderButton") {
addCustomOrder()
    }
    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars R Us </h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${PaintColors()}
                
            </section>
            <section class="choices__interior options">
                <h2>Fabrics</h2>
                ${Interiors()}
            </section>
            <section class="choices__technology options">
                <h2>Packages</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
                </section>
        </article>

        <article class="customOrders">
            <button id="orderButton">Create Custom Order</button>
           
        </article>
        
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
            
        </article>

       
    `
}