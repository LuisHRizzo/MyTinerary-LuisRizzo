import React from 'react';
import './carrouselHome.css'; 
import { useState, useEffect }from 'react';
FcPrevious
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const CarrouselHome = () => {
    const photoCities =[
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Roma_.jpg',
                name:'Rome'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Kioto_.jpg',
                name:'Kioto'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Par%C3%ADs.jpg',
                name:'Paris'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Praga_.jpg',
                name:'Praga'
            }

        ],
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Sevilla.jpg',
                name:'Sevilla'
            },
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Londres.jpg',
                name:'London'
            },
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Oia_.jpg',
                name:'Oia'
            },
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Nueva-York.jpg',
                name:'New York'
            }

        ],
        [
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Sydney.jpg',
                name:'Sidney'
            },
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2019/09/ciudades-bonitas-6.jpg',
                name:'Venice'
            },
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2019/09/ciudades-bonitas-2.jpg',
                name:'Barcelona'
            },
            {
                image:'https://elviajerofeliz.com/wp-content/uploads/2020/09/Lisboa.jpg',
                name:'Lisboa'
            }

        ]
    ]

    const [slide, setSlide] = useState(0)
    const prev = ()=>{
        if(slide ==0) {
            setSlide(photoCities.length -1)
        }else{
            setSlide(slide -1)
        }
        
    }
    const next = ()=>{
        if(slide == photoCities.length -1) {
            setSlide(0)
        }else{
            setSlide(slide +1)
        }
    }
  return (
    <div className='carousel' >
        <button className='button' onClick={prev} > <FcPrevious/> </button>
        <div className='carouselSlide ' >
            <div className='carouselTitle' >
                <h2>Popular MyTineraries</h2>
            </div>
            <div className='roww'>
                <div className='column'>
                    <div className='photo'>
                    <img src={photoCities[slide][0].image} style={{width: '100%', height:'100%'}} />
                    <div className='name'> {photoCities[slide][0].name} </div> 
                    </div>
                    <div className='photo'>
                    <img src={photoCities[slide][1].image} style={{width: '100%', height:'100%'}} />
                    <div className='name'> {photoCities[slide][1].name} </div>
                    </div>                    
                </div>
                <div className='column'>
                    <div className='photo'>
                    <img src={photoCities[slide][2].image} style={{width: '100%', height:'100%'}} />
                    <div className='name'> {photoCities[slide][2].name} </div> 
                    </div>
                    <div className='photo'>
                    <img src={photoCities[slide][3].image} style={{width: '100%', height:'100%'}} />
                    <div className='name'> {photoCities[slide][3].name} </div>
                    </div>                    
                </div>
            </div>
        </div>
        

        <button className='button' onClick={next} > <FcNext/> </button>
    </div>

  )
}
       
export default CarrouselHome