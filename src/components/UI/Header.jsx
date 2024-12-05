import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import "../../App.css"
import { NavLink } from "react-router-dom";
export const Header = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
        //   navbar for smaller screen
    const handleButtonToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
      };

    return (
        <div className="header-section">
               <nav className="navbar">
                  <h1>VOCALTY</h1>
                 <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/CountryTours">Country Tours</NavLink></li>
                   <li><NavLink to="/CreateVocalTour">Create Vocal Tour</NavLink></li>
                   <li><NavLink to="https://play.google.com/store/apps/details?id=com.vocalty.app" target="blank" className="bg-green-300 rounded-md">Try Vocalty+ on App</NavLink></li>
                   <li><NavLink to="/Login">Login</NavLink></li>
                 </ul>
             <div className="ham-menu" onClick={handleButtonToggle}>
             <IoIosMenu />
             </div>
               </nav>
        </div>
    )
}