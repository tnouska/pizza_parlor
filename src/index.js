import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import App from './components/App/App';


//create Saga middleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    yield takeEvery('FETCH_PIZZA', getPizzaSaga)
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

const pizzaList = (state = [], action) => {
    switch(action.type) {
        case 'SET_PIZZA': 
            return action.payload
        default:
            return state
    }
}

//create store
const store = createStore (
    combineReducers({ pizzaList }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleWare.run(rootSaga);

ReactDOM.render(<provider store={store}><App /></ provider>, document.getElementById('root'));
registerServiceWorker();
