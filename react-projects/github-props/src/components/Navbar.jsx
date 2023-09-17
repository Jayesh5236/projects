import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/"><i className="fa-brands fa-github fa-2x"></i>Github Search ENgine</Link>
            <div>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About Us</Link>
            </div>
        </div>
    )
}

export default Navbar