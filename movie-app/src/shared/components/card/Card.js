import React from "react";

import './Card.css'

const Card = props =>{
    return <div className={`card ${props.theme} ${props.className} ${props.noboxsahdow? 'no-boxshadow' : '' }` } style={{maxWidth:props.maxWidth, width:props.width }}>
        {props.children}
    </div>
}

export default Card