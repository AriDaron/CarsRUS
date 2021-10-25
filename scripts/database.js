/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/

const database = {
    paintColors: [
        {id: 1, color : "Silver", price: 200 },
        {id: 2, color : "Midnight Blue", price: 300 },
        {id: 3, color : "Firebrick Red", price: 450 },
        {id: 4, color : "Spring Green", price: 175 },
    ],
    interiors: [
        {id: 1, fabric : "Beige Fabric", price: 500 },
        {id: 2, fabric : "Charcoal Fabric", price: 600 },
        {id: 3, fabric : "White Leather", price: 950 },
        {id: 4, fabric : "Black Leather", price: 100 },
    
    ],
    technology: [
        {id: 1, package : "Basic Package (basic sound system)", price: 500 },
        {id: 2, package : "Navigation Package (includes integrated navigation controls)", price: 600 },
        {id: 3, package : "Visibility Package (includes side and reat cameras)", price: 950 },
        {id: 4, package : "Ultra Package (includes navigation and visibility packages)", price: 100 },
    
    ],
    wheels: [
        {id: 1, type : "17-inch Pair Radial", price: 500 },
        {id: 2, type : "17-inch Pair Radial Black", price: 600 },
        {id: 3, type : "18-inch Pair Spoke Silver", price: 950 },
        {id: 4, type : "18-inch Pair Spoke Black", price: 100 },
    
    ],
    customOrders: [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder:
        {
          /*  id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693  */    
        }
}
export const getPaintColor = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
export const getOrders = ()=> {
    return database.customOrders.map( customOrder => ({...customOrder }))
}


export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id


}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id


}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}