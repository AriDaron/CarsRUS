import { getWheels,setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => { if (event.target.name === "wheels") {
        setWheels(parseInt(event.target.value))

    }
}
)

 export const Wheels = () => {
    let html = "<h2></h2>"

    html += '<select name="wheels">'
    html += '<option value="0">Select a wheel type </option>'

    const arrayOfOptions = wheels.map( (wheels) => {
            return `<option value="${wheels.id}">${wheels.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

    }
