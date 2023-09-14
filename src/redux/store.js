import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from './reducers/citiesReducers.js'
import { itenerariesReducers } from './reducers/itineraryReducers.js'
import { usersReducer } from "./reducers/userReducers.js";

const store = configureStore( {
    reducer : {
        cities : citiesReducer,
        itineraries : itenerariesReducers,
        users : usersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
} )

export default store