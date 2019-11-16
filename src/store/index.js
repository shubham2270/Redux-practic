import { createStore } from 'redux';
import reducer from '../reducers/index';

const initialState = {
    username: "Anny",
    totalAmount: 2500701
}

const store = createStore(reducer, initialState);

export default store;