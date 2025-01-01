import React from 'react';
import './Heading.css'

function Heading(props) {
    
    return (

        <>

            <header data-aos="zoom-in-up" className='header' id="headingsOfAll">
                <h2 className={`heading_segment ${props.className}`} id={props.id} >{props.title}</h2>
            </header>

        </>

    )
}

export default Heading
