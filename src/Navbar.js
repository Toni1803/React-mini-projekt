import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    
    return(
        <nav style={{textAlign:"center"}}>
            <Link to="/">Početna</Link>
            <Link to="Onama">O nama</Link>
            <Link to="Galerija">Galerija</Link>
            <Link to="Kontakt">Kontakt</Link>
        </nav>
    )
}

export default Navbar;