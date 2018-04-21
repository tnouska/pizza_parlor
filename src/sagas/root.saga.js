import { takeEvery } from "redux-saga/effects";
import { getOrderSaga,getPizzaSaga,addOrderSaga } from "./pizza.sagas";

//root Saga for takeEvery
function* rootSaga() {
    yield takeEvery('FETCH_PIZZA', getPizzaSaga)
    yield takeEvery('FETCH_ORDER', getOrderSaga)
    yield takeEvery('ADD_ORDER', addOrderSaga)
}

export default rootSaga