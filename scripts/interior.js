import { getInterior,setInterior } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => { if (event.target.name === "Fabric") {
        setInterior(parseInt(event.target.value))
        
    }
}
)

export const Interiors = () => {
    let html = "<h2></h2>"

    html += '<select name="Fabric">'
    html += '<option value="0">Select an interior fabric </option>'

    const arrayOfOptions = interiors.map(interior => {
            return `<option value="${interior.id}">${interior.fabric}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

    }

