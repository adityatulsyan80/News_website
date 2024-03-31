import React,{useState} from "react";
import "./Header.css";
import {Link,NavLink} from "react-router-dom";

const Navbar = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to ="/" className="title">NEWS</Link>
            <div className="menu" onClick={()=>{
              setMenuOpen(!menuOpen);
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open": " "}>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/create">CreateNews</NavLink></li>
                <li><NavLink to="/manage">ManageNews</NavLink></li>
            </ul>
        </nav>

    );
};

export default Navbar;