import React from 'react';
import { BiDownArrowAlt } from "react-icons/bi"


export default function (props) {
    return <div className="main-container">
        <div className="header-container">
            <div className='header-text'>
            <h1>
                 As a digital consultancy company, we deliver
                 individual, tailored online marketing solutions to generate growth.
            </h1>
            <h1>
            If you are thinking about combining media, data
                 and technology in order to make better business decisions, you have come to the right place.
            </h1>
            </div>

            
                <button className='top-button'>ASK FOR DETAILS</button><br></br>
                <BiDownArrowAlt className='fa-i'/>
                
              
        </div>
    </div>

}
