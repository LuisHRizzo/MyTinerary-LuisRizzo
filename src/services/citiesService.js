import axios from "axios";



const citiesQueries = axios.create({baseURL:'http://localhost:3000/api/cities'} )
    

export const getAllCities = async (queryParams = "") => {
    try {
        const response = await citiesQueries(queryParams);
        return response.data.cities;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getOneCity = async (id) => {
    try {
        const response = await citiesQueries(`/${id}`);
        console.log(response.data)
        return response.data.city;
    } catch (error) {
        console.error(error);
        return [];
    }
};