import "./hotel.css";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import head from '../../uploads/head.jpg';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import Navbar from "../../components/navbar/Navbar";
// import { ContextTwo } from "../../context/Context";

import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
const Hotel = () => {

const {dates,options} = useContext(SearchContext);
function dateDifference(date2, date1) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
const days = (dateDifference(dates[0].endDate,dates[0].startDate));


  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  return (
<>
{/* <h1>{data.name}</h1>
<h1>{data.city}</h1>
<h1>{data.distance}</h1>
<h1>No. of Days i.e. date difference  = {days}</h1>
<h1>cost i.e. days * cheapest price  = {days * data.cheapestprice }</h1>
<h1>cost i.e. days * cheapest price* number of adult  = {days * data.cheapestprice * options.room }</h1> */}



<header id="header">
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="intro-text">
            <h1>{data.name}</h1>
            <p>Most Affordable Hotel of the city {data.city}</p>
            <a href="#about" className="btnh">Book My Room</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div id="hotelsdetails">
    <div className="container">
      <div className="box1">
        <p>Distance</p>
        <p>{data.distance}</p>
      </div>
      <div className="box1">
        <p>Address</p>
        <p>{data.city}</p>
      </div>
      <div className="box1">
        <p>No. of Day </p>
        <p>{days}</p>
      </div>
      <div className="box1">
        <p>Price</p>
        <p>{days * data.cheapestprice }</p>
      </div>
    </div>
  </div>




  <div id="about">
    <div className="container">
      <div className="section-title text-center center">
        <h2>About Hotel {data.name}</h2>
        <hr/>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6"> <img src="img/bartender.png" className="img-responsive" alt=""/> </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <p>Stunningly situated overlooking {data.city} in the historic Rocks district, a short walk from the city's shopping and business centres, Four Seasons Hotel Sydney is vibrant and elegant, with dramatic harbourfront views and a luxurious day spa featuring exclusive skincare and aromatherapy treatments.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  </div>

</>

  )}


export default Hotel;
