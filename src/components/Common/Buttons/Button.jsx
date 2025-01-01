import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <>

        {/* Here add : -

        1) redirect text in "to"
        2) Partcular className
        3) title of Button
        
        
        */}

            <a href={`${props.redirects}`} className={`segment_btn ${props.className}`} tabIndex="-1" role="button">{props.title}</a>
        </>
    )
}

export default Button;
