import React from 'react';
import Header from "../Components/Header";
import NavigationBar from "../Components/Navigation-Bar";
import { AiOutlineCheckCircle } from "react-icons/ai"

export default function (props) {
    return <div>
        <NavigationBar/>
        <Header/>



    <div className='container-03'>
    <div className='h1-03'><h1>03</h1></div>
    <div className='h2-03'><h2>TRAININGS</h2></div>
    <div className='p-03'>
        <p>
            Apart from full implementation packages, John Leggy also offers 
            trainings as a standalone service. Our trainers are experienced
            product experts. They can demonstrate how each technology works
            and how to drive maximum results using it. Our mission is to show
            strengths and weaknesses of each solution to make the clients
            expectations real.
          
        </p>
        
    </div>
    <hr/>
    <AiOutlineCheckCircle/>   Apart from full implementation packages, John Leggy also offers 
            trainings as a standalone service. Our trainers are experienced
            product experts. They can demonstrate how each technology works
            and how to drive maximum results using it. Our mission is to show
            strengths and weaknesses of each solution to make the clients
            expectations real.
          
    </div>
  






<div class="form-container">
            <div className='form-header-text'><h1>CONTACT</h1></div>
        <div>
            <input placeholder="First Name" className='form-input'/>
        </div>

        <div className='' id="some-custom-id">
            <input placeholder="Surname" className='form-input'/>
        </div>
        <button type='submit' className='submit-form-button'>SEND</button>
    </div>
  



      
       
    </div>
}