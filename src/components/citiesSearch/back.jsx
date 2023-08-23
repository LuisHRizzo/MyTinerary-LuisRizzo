import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";

const CitiesSearch = () => {
    const fetchCities = () => {
        const [cities, setCities] = useState([]);
        const [busqueda, setBusqueda] = useState("");

        useEffect(() => {
            fetch('http://localhost:3000/api/cities')
                .then(response => response.json())
                .then(console.log(response.data))
                .then(data => setCities(data.cities))

        }, []);
        useEffect(() => {
            fetchCities()
        }, []);

        const handleChange = e => {
            setBusqueda(e.target.value);
            filtrar(e.target.value);  
        }


        return (

            <>
                <div className='form-control'>
                    <input type="search" name="Busqueda" id="busqueda" value={busqueda}
                        placeholder='Búsqueda por nombre' onChange={handleChange} />
                    <button className="btn btn-success">
                        <CiSearch/>
                    </button>
                </div>






            </>


        )

    };
}
export default CitiesSearch