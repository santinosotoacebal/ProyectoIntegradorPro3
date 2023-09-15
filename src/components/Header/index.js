import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { Component } from 'react'
import Buscador from "../Buscador";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
            return (  
        <nav style={{marginBottom:'2%'}}>
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/canciones">Canciones</Link></li>
            <li><Link to="/cantantes">Cantantes</Link></li>
        </ul>
        <ul>
            <li><img src ='https://icons.veryicon.com/png/o/object/custom-icon/listen-to-the-music.png' className = 'logo'></img></li>
        </ul>
        
    </nav>)
    }
}
export default Header;