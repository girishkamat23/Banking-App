import { createStore } from 'redux';
import appReducer from '../redux comp/reducer.js';

const reduxStore = createStore(appReducer);

export default reduxStore;
