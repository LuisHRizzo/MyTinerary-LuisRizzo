import React from 'react';
import './carrouselHome.css'; 
const CarrouselHome = () => {
    const photoCities =[
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
        },
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
        },
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
    const prev = ()=>{

    }
    const next = ()=>{
        
    }
  return (
    <div className='Carrousel' >
        <button onClick={prev} > { "<" } </button>
        <img src={photoCities[0].image} alt="" />

        <button onClick={next} >{ ">" }</button>
    </div>
  )
}

export default CarrouselHome