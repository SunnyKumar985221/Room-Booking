import "./navbar.css"
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { faBars, faUser, faBell , faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Messagebox from "../messagepopup/Messagebox";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [mobileview, setmobileview] = useState(false);
  const [message, setmessage] = useState(false);
  const [message2, setmessage2] = useState(false);
  const [message3, setmessage3] = useState(false);


  return (
    <>

      <div className="navbar">
        <ul class="web">
          <li><NavLink className="logo3" to="/"><span className="logo1">Hotel</span><span className="logo2">Nexus</span></NavLink></li>
          <li><NavLink className="btn" to="/">Home</NavLink></li>
          <li><NavLink className="btn" to="/ere">About Us</NavLink></li>
          <li><NavLink className="btn" to="/sf">Contact Us</NavLink></li>

          <li><span className="btn notificationIcon"  style={{"color":"#ff5722","background": "#3070649e"}} onClick={()=> setmessage(!message)}>
          {message && <><Messagebox props={"notification"} /></>}
          <FontAwesomeIcon icon={faBell} /></span></li>

          <li><span className="btn notificationIcon" onClick={()=> setmessage3(!message3)}>
          {message3 && <><Messagebox props={"message3"} /></>}
          <FontAwesomeIcon icon={faInfoCircle} /></span></li>

          <li><span className="btn notificationIcon" style={{"color":"black","background": "#40aa96"}} onClick={()=> setmessage2(!message2)}>
          {message2 && <><Messagebox props={"message2"} /></>}
          <FontAwesomeIcon icon={faUser} /></span></li>

          <li><NavLink className="btn" to="/sf"><span className="offer">Offer</span></NavLink></li>
        </ul>
      </div>


      <div className="navbarMobile">
        <div><span className="logo1">Hotel</span><span className="logo2">Nexus</span></div>
        <div class="mobilemenubar" onClick={()=>{setmobileview(!mobileview)}}><FontAwesomeIcon style={{"color":"#3d5865"}} icon={faBars} /></div>
      </div>
      {mobileview ? <>
        <div className="mobilemenu">
          <li><NavLink className="btn" to="/">Home</NavLink></li>
          <li><NavLink className="btn" to="/ere">About Us</NavLink></li>
          <li><NavLink className="btn" to="/sf">Contact Us</NavLink></li>
          {user ? (<li><NavLink to="/login" className="btn username">{user.username}</NavLink></li>) : (<>
            <li><NavLink to="/login" className="btn">Login</NavLink></li>
          </>)}
        </div>
      </> : ''
      }
    </>
  )
}

export default Navbar