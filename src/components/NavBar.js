/*Farhan Akthar */
import '../CSS/nav.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id='navbar'>
            <h3>GPU Advisor</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/catalogue/nvidia">Catalogue</Link>
                <Link to="/selector">Selector</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
}

export default NavBar;
