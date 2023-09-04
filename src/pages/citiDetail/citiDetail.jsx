import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './citiDetail.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom';
import Itineraries from '../../components/itineraries/Itineraries.jsx'

const CitiDetail = () => {
    const [city, setCity] = useState({})
    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/cities/${params.id}`);
                const data = await response.json();
                setCity(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    console.log(city)

    return (
        <div className="container city-details-container">
            <div className="row city-details">
                {city.city ? ( // Verificar si city.name está definido . aca podria haber sido length >0 tambien. 
                    <>
                        <div className="col-xs-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                            <h1>{city.city.name}</h1>
                            <h5>Country: {city.city.country}</h5>
                            <h5>Description: {city.city.description}</h5>
                            <h5>Coin: {city.city.coin}</h5>
                        </div>
                        <div className="col-xs-12 col-md-6 d-flex align-items-center">
                            <img src={city.city.image} alt={city.city.name} className="img-fluid" />
                        </div>
                        <Anchor to={'../cities'}>
                            <button className="btn btn-primary d-flex align-items-center">
                                Back to Cities
                            </button>
                        </Anchor>
                    </>
                ) : (
                    <p>Loading city details...</p>
                )}
            </div>
                <Itineraries/>
            </div>
    )
}

export default CitiDetail