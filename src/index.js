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

//create Saga middleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    yield takeEvery('FETCH_PIZZA', getPizzaSaga),
    yield takeEvery('FETCH_ORDER', getOrderSaga)
}

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

const pizzaList = (state = [], action) => {
    switch(action.type) {
        case 'SET_PIZZA': 
            return action.payload
        default:
            return state
    }
}

const orderList = (state = [], action) => {
    switch(action.type) {
        case 'SET_ORDER':
            return action.payload
        default:
            return state
    }
}

//create store
const store = createStore (
    combineReducers({ pizzaList, orderList }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('root'));
registerServiceWorker();
