import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './citiDetail.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom';


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
                {city.name ? ( // Verificar si city.name está definido
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
            <div className='flex-column justify-content-center align-items-center'>
                <h1>Under construction...</h1>
            </div>
        </div>
    )
}

export default CitiDetail