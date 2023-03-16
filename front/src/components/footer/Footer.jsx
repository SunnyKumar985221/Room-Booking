import "./footer.css";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
   
<footer class="footer-distributed">

      <div class="footer-left">

        <h3>Hotel<span>Nexus</span></h3>

        

        <p class="slogan">Arrive as guests, leave as friends</p>
      </div>

      <div class="footer-center">

        {/* <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Kankarbagh</span>Patna, Bihar</p>
        </div> */}

        {/* <div>
          <i class="fa fa-phone"></i>
          <p>9852211257</p>
        </div> */}

        {/* <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:sunnyrajpcs84@gmail.com">Hotel Nexus</a></p>
        </div> */}

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>Company Motto</span>
          Our motto is to provide the best hotel in your city with most affordable price.
        </p>

        <div class="footer-icons">

          <Link to="/"><i class="fa fa-facebook"></i></Link>
          <Link to="/"><i class="fa fa-twitter"></i></Link>
          <Link to="/"><i class="fa fa-linkedin"></i></Link>
          <Link to="/"><i class="fa fa-github"></i></Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
