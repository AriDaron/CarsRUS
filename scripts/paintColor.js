import { getPaintColor, setPaintColor } from "./database.js";

const paintColors = getPaintColor()

document.addEventListener(
    "change",
    (event) => { if (event.target.name === "color") {
        setPaintColor(parseInt(event.target.value))

    }
}
)


export const PaintColors = () => {
    let html = "<h2></h2>"

    html += '<select name="color">'
    html += '<option value="0">Select a color</option>'

    const arrayOfOptions = paintColors.map( (paintColors) => {
            return `<option value="${paintColors.id}">${paintColors.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

    }


