import React from "react";
import logo from "../../assets/img/logo_barber.webp"

const Preloader = () => {
    return (
        <div className="page-loader">
            <img src={logo} alt="logo barber" className="loader-logo" />
        </div>
    );
};

export default Preloader;