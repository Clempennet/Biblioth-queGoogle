import React, { useState } from 'react';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Button = ({ 
    children = 'Button', 
    classname = 'btn btn-outline-dark me-2',
    type,
    onClick
}) => {
    return (
        <>
    
            <button 
            onClick={onClick}
            className={classname} 
            type={type}
            >
                
                {children}
            </button>
        </>
    );
}

export default Button;
