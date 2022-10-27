import React, { useState } from 'react';
import './Image.css';
import imga from '../../component/Livre.png';



const Image = ({ 
    logo = imga,
    alt ="Pas d'image",
}) => {
    return (
        <>
            <img className='img'
            src={logo} 
            alt={alt}
             />

        </>
    );
}

export default Image;


