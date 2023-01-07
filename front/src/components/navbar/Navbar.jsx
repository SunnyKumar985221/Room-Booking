import "./navbar.css"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
  <>

    <div className="navbar">
      <ul>
        <li><NavLink className="logo3" to="/"><span className="logo1">Hotel</span><span className="logo2">Nexus</span></NavLink></li>
        <li><NavLink className="btn" to="/">Home</NavLink></li>
        <li><NavLink className="btn" to="/ere">About Us</NavLink></li>
        <li><NavLink className="btn" to="/sf">Contact Us</NavLink></li>
        {user ? (<li><NavLink to="/login" className="btn username">{user.username}</NavLink></li>) : (<>
          <li><NavLink to="/login" className="btn">Login</NavLink></li>
        </>)}
      </ul>
    </div>
    
  </>
  )
}

export default Navbar