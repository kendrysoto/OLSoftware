import React from 'react';
import Login from './Login';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="boxTitleBanner">
                    <h3>Aplicacion OLSoftware</h3>
                    <p>prueba practica Front-end senior</p>
                </div>
            </div>
            <Login />
        </div>
    )
}

export default Banner;