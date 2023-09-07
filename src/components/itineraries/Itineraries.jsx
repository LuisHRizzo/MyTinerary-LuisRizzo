import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../itineraries/itineraries.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import ItineraryCard from '../itineraryCard/itineraryCard.jsx';


const Itineraries = ({ itineraries }) => {
    console.log(itineraries)
    const {loading } = useSelector(store => store.cities)
    
    if (loading) {
        return <h1 className='text-center mt-5 text-primary'>Loading...</h1>;
    }

    return (
        <div>
            <div className="container city-details-container">
                <div className="row city-details">
                    <div className="col-xs-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                        {itineraries?.length == 0?(<h1>Under Construction.</h1>):(itineraries?.map(itinerary => <ItineraryCard  key={itinerary._id} itinerary={itinerary}/> ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itineraries