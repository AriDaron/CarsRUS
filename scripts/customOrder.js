import { getInterior } from "./database.js"
import { getPaintColor} from "./database.js"
import { getTechnology} from "./database.js"
import { getWheels} from "./database.js"
import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {

    const interiors = getInterior()
    const colors = getPaintColor()
    const packages = getTechnology()
    const wheels = getWheels()
    

    // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundColor = colors.find(
        (color) => {
            return color.id === order.paintColorId
        }
    )
    const foundPackage = packages.find(
        (packages) => {
          return packages.id === order.technologyId
    }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const totalCost = foundInterior.price + foundColor.price + foundPackage.price + foundWheel.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}.
    </li>`
}



export const Orders = () => {
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
