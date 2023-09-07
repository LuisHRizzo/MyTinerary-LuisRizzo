import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from './reducers/citiesReducers.js'
import { itenerariesReducers } from './reducers/itineraryReducers.js'

const store = configureStore( {
    reducer : {
        cities : citiesReducer,
        itineraries : itenerariesReducers
    }
} )

export default store