import React from 'react'
import './footer.css'
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";


const Footer = () => {
  return (
    <>
    <div className='footer' >
      <p> AP MERN 08 TN LUIS RIZZO</p>      
      <p>Made entirely with <DiMongodb/> <SiExpress/> <DiReact/> <DiNodejsSmall/> </p>
    
    </div>
    </>
  )
}

export default Footer