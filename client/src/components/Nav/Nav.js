import React from "react";
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="dt w-100 border-box pa3 ph5-ns">
        <p className="dtc v-mid link w-25" href="#" title="Home">Astrolab</p>
        <div className="dtc v-mid w-75 tr" >
            <span><Link to="/home" className="link dib mr3 mr4-ns nav-item">Home</Link></span>
            <span><Link to="/layers" className="link dib mr3 mr4-ns nav-item">Layers</Link></span>
            <span ><Link to="/explore" className="link dib mr3 mr4-ns nav-item">Explore</Link></span>
            <span><Link to="/bookmarks" className="link dib mr3 mr4-ns nav-item">Bookmarks</Link></span>
            <span><Link to="/profile" className="link dib nav-item" >Profile</Link></span>
        </div>
    </nav>
);


export default Nav;
