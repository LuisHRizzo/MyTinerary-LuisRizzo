import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useMemo, useRef } from 'react'
import { CiSearch } from "react-icons/ci";

const CitiesSearch = () => {

    const [cities, setCities] = useState([]);
    const [query, setQuery] = useState("");
    const inputRef = useRef()

    useEffect(() => {
        fetch('http://localhost:3000/api/cities')
            .then((response) => response.json())
            .then((data) => setCities(data.cities))
            .catch(error=>{console.log(error) })

    }, []);
     
    
    const filteredItems = useMemo(() => {
        return cities.filter (city => {
          return city.name.toLowerCase().startsWith(query.toLowerCase().trim())
        })
      }, [cities, query])

      function onSubmit(e) {
        e.preventDefault()
    
        const value = inputRef.current.value
        if (value === "") return
        setCities(prev => {
          return [...prev, value]
        })
    
        inputRef.current.value = ""
      }  

    return (

        <>
            <div className='form-control d-flex align-content-center flex-wrap justify-content-center'>
                <input  value={query} placeholder=' Búsqueda por nombre ' onChange={e => setQuery(e.target.value)} />
                <button className="btn btn-primary">
                    <CiSearch />
                </button>
                {/* {console.log(cities)} */}
            </div>

            <div className='d-flex align-content-center flex-wrap justify-content-evenly'>
                    {
                        filteredItems.map(card => 
                            <div key={card._id} className="card bg-dark text-white align-self-center ">
                                <img src={card.image} className="card-img" 
                                    style={{width: '200px', height:'150px'}} 
                                    alt={card.name}/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{card.name}</h5>
                                        <h6 className='card-title'>{card.country}</h6>
                                    </div>
                            </div>
                        )
                    }                   
                </div>
        </>
    )
};


export default CitiesSearch