import React from 'react';
import './carrouselHome.css';
import { useState, useEffect } from 'react';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const CarrouselHome = () => {
    const photoCities = [
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Roma_.jpg',
                name: 'Rome'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Kioto_.jpg',
                name: 'Kioto'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Par%C3%ADs.jpg',
                name: 'Paris'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Praga_.jpg',
                name: 'Praga'
            }

        ],
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Sevilla.jpg',
                name: 'Sevilla'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Londres.jpg',
                name: 'London'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Oia_.jpg',
                name: 'Oia'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Nueva-York.jpg',
                name: 'New York'
            }

        ],
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Sydney.jpg',
                name: 'Sidney'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/09/ciudades-bonitas-6.jpg',
                name: 'Venice'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/09/ciudades-bonitas-2.jpg',
                name: 'Barcelona'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2020/09/Lisboa.jpg',
                name: 'Lisboa'
            }

        ]
    ]

    let [slide, setSlide] = useState(0)
    const prev = () => {
        if (slide == 0) {
            setSlide(photoCities.length - 1)
        } else {
            setSlide(slide - 1)
        }

    }
    
    useEffect(() => {        
       const interval = setInterval(() => { 
            next() 
        }, 3000)
        return ()=> {clearInterval(interval) }
    }, )

    const next = () => {
        if (slide == photoCities.length - 1) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }
    
    return (
        <div className='carousel' >
            <button className='button' onClick={prev} > <FcPrevious /> </button>
            <div className='carouselSlide container-fluid ' >
                <div className='carouselTitle' >
                    <h2>Popular MyTineraries</h2>
                </div>
                <div className='d-flex align-content-center flex-wrap justify-content-evenly'>
                    {
                        photoCities[slide].map(card =>
                            <div key={slide.name} class="card bg-dark text-white align-self-center ">
                                <img src={card.image} class="card-img" 
                                    style={{width: '300px', height:'200px'}} 
                                    alt={card.name}/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">{card.name}</h5>
                                    </div>
                            </div>
                        )
                    }                   
                </div>
            </div>


            <button className='button' onClick={next} > <FcNext /> </button>
        </div>

    )
}

export default CarrouselHome