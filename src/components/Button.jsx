import React from 'react'
import './Button.css'

export default props =>(
    
    <>
        <button onClick={props.label} className={`
        button ${props.operation ?'operation' : ''} 
        button ${props.double ?'double' : ''} 
        button ${props.triple ?'triple' : ''} 
        `}>{props.label}</button>

    </>
)