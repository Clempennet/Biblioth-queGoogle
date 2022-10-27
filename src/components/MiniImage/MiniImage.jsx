import React, { useState } from 'react';
import './MiniImage.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


const MiniImage = ({ 
    modif 
}) => {
    return (
        <>
            <i 
            class={modif} 
            >
            </i>
        </>
    );
}

export default MiniImage;
