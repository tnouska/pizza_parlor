import { combineReducers } from "redux";

let menuArray = [{ name: 'Onamonapizza', quantity: 0, cost: 0 }, { name: 'Splat of Marinara', quantity: 0, cost: 0 },
{ name: 'Pepperoni', quantity: 0, cost: 0 }, { name: 'Over the Rainbow', quantity: 0, cost: 0 },
{ name: 'Chinese Firedragon', quantity: 0, cost: 0 }, { name: 'Bad Date', quantity: 0, cost: 0 }]

//pizzaList reducer
export const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZA':
            return action.payload
        default:
            return state
    }
}

//orderList reducer
export const orderList = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return action.payload
        default:
            return state
    }
}


// updateOrder reducer
export const pizzaOrder = (state = menuArray, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            let newMenuArray = menuArray.map((pizza) => {
                if (pizza.name === action.payload.name) {
                    pizza.quantity++;
                    pizza.cost += parseFloat(action.payload.cost);
                }
                return pizza
            });
            return newMenuArray
        case 'DELETE_PIZZA':
            newMenuArray = menuArray.map((pizza) => {
                if (pizza.name === action.payload.name) {
                    pizza.quantity--;
                    pizza.cost -= parseFloat(action.payload.cost);
                }
                return pizza
                    ;
            })
            return newMenuArray
        default:
            return state
    }
}

export default combineReducers( {pizzaList, orderList, pizzaOrder} )