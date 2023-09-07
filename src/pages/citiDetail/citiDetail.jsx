import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './citiDetail.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { cargarCity } from "../../redux/actions/citiesActions.js"
import { getOneCity } from '../../services/citiesService';
import { Link as Anchor } from 'react-router-dom';
import Itineraries from '../../components/itineraries/Itineraries.jsx';

const CitiDetail = () => {
    const params = useParams()
    const { id } = useParams();
    const dispatch = useDispatch()

    const { loading, city } = useSelector(store => store.cities)

    useEffect(() => {
        dispatch(cargarCity(id));
    }, []);
    console.log(city.itineraries)
    return (
        <div className="container city-details-container">
            <div className="row city-details">
                {city ? ( // Verificar si city.name está definido . aca podria haber sido length >0 tambien. 
                    <>
                        <div className="col-xs-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                            <h1>{city.name}</h1>
                            <h5>Country: {city.country}</h5>
                            <h5>Description: {city.description}</h5>
                            <h5>Coin: {city.coin}</h5>
                        </div>
                        <div className="col-xs-12 col-md-6 d-flex align-items-center">
                            <img src={city.image} alt={city.name} className="img-fluid" />
                        </div>
                        <Anchor to={'../cities'} >
                            <button className="btn btn-primary d-flex align-items-center">
                            Back to Cities
                            </button>
                        </Anchor>
                        <div className="container city-details-container">
                            <Itineraries itineraries={city?.itineraries} />
                        </div>
                    </>
                ) : (
                    <p>Loading city details...</p>
                )}
            </div>

        </div>
    )
}

export default CitiDetail