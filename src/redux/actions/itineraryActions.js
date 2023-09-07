import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItineraries, getOneItinerary } from "../../services/ItinerariesService.js";

export const cargarItinerarySync = createAction('cargarItinerarySync', (itinerary) => {
    return {
        payload: itinerary
    };
});

export const cargarItineraries = createAsyncThunk('cargarItineraries', async () => {
    try {
        const response = await getAllItineraries();
        return response;
    } catch (error) {
        throw error;
    }
});

export const cargarItinerary = createAsyncThunk('cargarItinerary', async ({ id }) => {
    try {
        const itinerary = await getOneItinerary(id);
        return itinerary;
    } catch (error) {
        console.log(error);
        return null;
    }
});