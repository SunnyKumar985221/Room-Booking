import "./featured.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import mumbai from './cityimage/mumbai.jpg'
import pune from './cityimage/pune.jpg'
import indore from './cityimage/indore.jpg'
import banglore from './cityimage/banglore.jpg'
import delhi from './cityimage/delhi.jpg'
import patna from './cityimage/patna.jpg'
import { ContextOne } from "../../context/Context";
import HashLoader from "react-spinners/HashLoader";
import useFetch from "../../hooks/useFetch.js"

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Mumbai,Delhi,Banglore,Patna,Pune,Indore")
  const { dispatch } = useContext(ContextOne)
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const handleSearch = (e) => {
    dispatch({ type: "TEST", payload: (e.target.name) });
    navigate("/hotels", { state: { destination } });
  };


  return (<>
    <div className="featured">
      {loading ? (<HashLoader style={{ margin: "0 auto", display: "block", }} color="#6c33ab" size={100} speedMultiplier={1} />) : (<><div className="featuredItem">
        <img onClick={handleSearch}
          src={mumbai}
          name="Mumbai"
          onMouseEnter={(e) => setDestination(e.target.name)}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{data[0]} Available</h2>
        </div>
      </div>

        <div className="featuredItem">
          <img onClick={handleSearch}
            src={delhi}
            name="Delhi"
            onMouseEnter={(e) => setDestination(e.target.name)}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Delhi</h1>
            <h2>{data[1]} Available</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img onClick={handleSearch}
            src={banglore}
            name="Banglore"
            onMouseEnter={(e) => setDestination(e.target.name)}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Bangalore</h1>
            <h2>{data[2]} Available</h2>
          </div>
        </div></>)}
    </div>
    <div className="featured">
      {loading ? ("Wait") : (<><div className="featuredItem">
        <img onClick={handleSearch}
          src={patna}
          name="Patna"
          onMouseEnter={(e) => setDestination(e.target.name)}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Patna</h1>
          <h2>{data[3]} Available</h2>
        </div>
      </div>

        <div className="featuredItem">
          <img onClick={handleSearch}
            src={pune}
            name="Pune"
            onMouseEnter={(e) => setDestination(e.target.name)}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Pune</h1>
            <h2>{data[4]} Available</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img onClick={handleSearch}
            src={indore}
            name="Indore"
            onMouseEnter={(e) => setDestination(e.target.name)}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Indore</h1>
            <h2>{data[5]} Available</h2>
          </div>
        </div></>)}
    </div>
  </>);
};

export default Featured;
