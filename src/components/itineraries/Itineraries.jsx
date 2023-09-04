import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../itineraries/itineraries.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


const Itineraries = () => {
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


    return (
        <div>
            <div className="container city-details-container">
                <div className="row city-details">
                    {!city.city ? (<p>Loading city details...</p>) : city.city.itineraries.length > 0
                        ? (
                            <>
                                <div className="col-xs-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                                    {city.city.itineraries.map(itinerary => {

                                        return (
                                            <div className="card mb-3" key={`${itinerary._id}`}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <div className="card-img-container d-flex flex-column align-items-center p-3">
                                                            <img
                                                                src={itinerary.photo}
                                                                alt={itinerary.titulo}
                                                                className="card-img rounded-circle"
                                                            />
                                                            <h5>{itinerary.name}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h4 className="card-title">{itinerary.titulo}</h4>
                                                            <p className="card-text">
                                                                <strong>Duración:</strong> {itinerary.duration} horas
                                                            </p>
                                                            <p className="card-text">
                                                                <strong>Hashtags:</strong> {itinerary.hashtags}
                                                            </p>
                                                            <p className="card-text">
                                                                <strong>Costo:</strong> {itinerary.price}
                                                            </p>
                                                            <img src="./billete-de-un-dolar.png" alt="" />
                                                            <div>
                                                                <Accordion defaultActiveKey="0">
                                                                    <Accordion.Item eventKey="0">
                                                                    <Accordion.Header><button className="btn btn-primary d-flex align-items-center">View More</button></Accordion.Header>
                                                                        <Accordion.Body>
                                                                            <h2>Under Construction</h2>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}

                                </div>

                            </>

                        ) : (<h2>No hay itinerarios</h2>)


                    }
                </div>
            </div>
        </div>
    )
}

export default Itineraries