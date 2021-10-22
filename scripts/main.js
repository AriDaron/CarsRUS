import { CarsRUs } from "./CarsRUs.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
    /*`
    <section class="allOptions">
   
    
interiorhtml
paintcolorhtml
technologyhtml
wheelshtml

</section>

`
*/
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

