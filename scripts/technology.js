import { getTechnology, setTechnology } from "./database.js";

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => { if (event.target.name === "tech") {
        setTechnology(parseInt(event.target.value))

    }
}
)


export const Technology = () => {
    let html = "<h2></h2>"

    html += '<select name="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technology.map( (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

    }