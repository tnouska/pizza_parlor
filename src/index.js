import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers/pizzas.reducer'
import rootSaga from './sagas/root.saga';



//create Saga middleware
const sagaMiddleware = createSagaMiddleware();


//create store
const store = createStore (
    reducers,
    applyMiddleware(sagaMiddleware, logger)
)

//RUN MIDDLEWARE
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('root'));
registerServiceWorker();
