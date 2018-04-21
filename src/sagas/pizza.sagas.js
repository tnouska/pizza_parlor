import { call, put } from 'redux-saga/effects';
import axios from 'axios'

//get pizza generator function
export function* getPizzaSaga(action) {
    try {
        const pizzaResponse = yield call(axios.get, '/pizza');
        yield put({
            type: 'SET_PIZZA',
            payload: pizzaResponse.data
        })
    } catch (error) {

    }
}

//get order generator function
export function* getOrderSaga(action) {
    try {
        const orderResponse = yield call(axios.get, '/order');
        yield put({
            type: 'SET_ORDER',
            payload: orderResponse.data
        })
    } catch (error) {

    }
}

//post to order generator function
export function* addOrderSaga(action) {
    try {
        yield call(axios.post, '/order', action.payload)
        yield put({
            type: 'FETCH_ORDER'
        })
    } catch (error) {

    }
}

 