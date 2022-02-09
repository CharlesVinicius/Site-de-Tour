import React from "react";
import "./Navbar.css"



const Navbar = () =>{
    
    return(
        <header className="header">
            {/*<div id="nav-close" className="fas fa-times"></div>
            <div className="menu">
                <div id="menu-btn" className="fas fa-bars"></div>
    </div>*/}
            <a href="" className="logo"><i className="fas fa-hiking"></i>AirTravel</a>
                <a href="">Home</a>
                <a href="#produtos">Produtos</a>
                <a href="#pacotes">Pacotes</a>
                <a href="#reviews">Reviews</a>
        </header>
    )
}

export default Navbar