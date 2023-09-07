import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BiDollarCircle } from "react-icons/bi";


const ItineraryCard = ({itinerary}) => {

    let array=[]
    for(let i = 0; i <= itinerary.price; i++){
        array.push(<BiDollarCircle key={i}/> )
    }

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
                            <strong>Costo:</strong> {array}
                        </p>
                        
                        <div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <p className='btn btn-primary'>View More</p>
                                        </Accordion.Header>
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

export default ItineraryCard