import { createStore } from 'redux'
import {PReducer} from './reducer.jsx'

export const  productStore = createStore(PReducer)