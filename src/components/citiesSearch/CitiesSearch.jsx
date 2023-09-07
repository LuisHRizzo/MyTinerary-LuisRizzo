import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './citiesSearch.css'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cargarCities, cargarCitySync,filtrarCities } from "../../redux/actions/citiesActions.js"
import { Link as Anchor  } from 'react-router-dom';
import { getAllCities } from '../../services/citiesService';

const ITEMS_PER_PAGE = 4;

const CitiesSearch = () => {

    const [currentPage, setCurrentPage] = useState(1);


    const inputBusqueda = useRef(null);


    const dispatch = useDispatch()

    const { loading, filteredCities, cities , valueFilter} = useSelector(store => store.cities)

    useEffect(() => {
       if (cities.length === 0) {
            dispatch(cargarCities())
        } 

    }, []);

    if (loading) {
        return <h1 className='text-center mt-5 text-primary'>Loading...</h1>;
    }

    const handleFilterChange = () => {
        dispatch(filtrarCities(inputBusqueda.current.value));
    }

    const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleCities = filteredCities.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    console.log(visibleCities)
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="filter-input">
                <Form.Control
                    type="text"
                    placeholder="Search by city name"
                    onChange={handleFilterChange}
                    ref={inputBusqueda}
                    defaultValue = {valueFilter}
                />
            </div>
            {!visibleCities.length == 0?(
            <div className="d-flex align-content-center flex-wrap justify-content-evenly">
                {visibleCities.map((card, index) => (
                    <div key={card._id} className="card bg-dark text-white align-self-center ">
                    <Anchor to={`./${card._id}`} >
                    <img src={card.image} className="card-img" 
                        style={{width: '200px', height:'150px'}} 
                            alt={card.name}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title cardTitleName">{card.name}</h5>
                            <h6 className='card-title cardTitleCountry'>{card.country}</h6>
                        </div>
                    </Anchor>
                </div>
                ))}
            </div>
            ):(<h1>There is no match for your query </h1> )}
            <div className="d-flex align-content-center flex-wrap justify-content-center">
                <Pagination>
                    <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                </Pagination>
            </div>
        </>
    );
};

export default CitiesSearch