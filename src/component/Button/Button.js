import React, { useState, useEffect } from 'react';
import './Button.scss';

const Button = ({ Img, alt, onClick }) => {

    return (
        <button className={`ButtonWrapper ${alt}`} onClick={onClick}>
            <img src={Img} alt={alt} />
        </button>
    );
};

export default Button;