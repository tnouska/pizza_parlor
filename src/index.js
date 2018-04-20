import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

let menuArray = [{name: 'Onamonapizza', quantity: 0, cost: 0 }, {name: 'Splat of Marinara', quantity: 0, cost: 0 },
{name: 'Pepperoni', quantity: 0, cost: 0 }, {name: 'Over the Rainbow', quantity: 0, cost: 0 },
{name: 'Chinese Firedragon', quantity: 0, cost: 0 }, {name: 'Bad Date', quantity: 0, cost: 0 }]

//create Saga middleware
const sagaMiddleware = createSagaMiddleware();

//root Saga for takeEvery
function* rootSaga(){
    yield takeEvery('FETCH_PIZZA', getPizzaSaga)
    yield takeEvery('FETCH_ORDER', getOrderSaga)
    yield takeEvery('ADD_ORDER', addOrderSaga)
}

//get pizza generator function
function* getPizzaSaga( action ){
    try{
        const pizzaResponse = yield call(axios.get, '/pizza');
        yield put({
            type: 'SET_PIZZA',
            payload: pizzaResponse.data
        })
    } catch ( error ) {

    }
}

//get order generator function
function* getOrderSaga( action ){
    try{
        const orderResponse = yield call(axios.get, '/order');
        yield put({
            type: 'SET_ORDER',
            payload: orderResponse.data
        })
    } catch ( error ){

    }
}

//post to order generator function
function* addOrderSaga( action ){
    try{
        yield call(axios.post, '/order', action.payload)
        yield put({
            type: 'FETCH_ORDER'
        })
    } catch ( error ){

    }
}



//pizzaList reducer
const pizzaList = (state = [], action) => {
    switch(action.type) {
        case 'SET_PIZZA': 
            return action.payload
        default:
            return state
    }
}

//orderList reducer
const orderList = (state = [], action) => {
    switch(action.type) {
        case 'SET_ORDER':
            return action.payload
        default:
            return state
    }
}

// updateOrder reducer
const pizzaOrder = (state = menuArray, action) => {
    switch(action.type) {
        case 'ADD_PIZZA':
            let newMenuArray = menuArray.map( (pizza) => {
                if( pizza.name === action.payload.name) {
                    pizza.quantity++;
                    pizza.cost += parseFloat(action.payload.cost);
                }
                return pizza
            }); 
            return newMenuArray
        case 'DELETE_PIZZA':
            let newMenuArray = menuArray.map( (pizza) =>{
                if( pizza.name === action.payload.name) {
                    pizza.quantity--;
                    pizza.cost -= parseFloat(action.payload.cost);
                }
                return pizza
            ;})
        return newMenuArray
        default: 
            return state
    }
}

//create store
const store = createStore (
    combineReducers({ pizzaList, orderList, pizzaOrder }),
    applyMiddleware(sagaMiddleware, logger)
)

//RUN MIDDLEWARE
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('root'));
registerServiceWorker();
