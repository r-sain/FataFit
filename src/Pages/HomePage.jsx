import React from "react";
import { useState, useContext } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import "./homepage.css";
import sun from "../images/Sun.png";
import dailyintake from "../images/dailyintake.png";
import chart from "../images/Chart.png";
import fruitdata from "../fruits.json";
import AddWater from "../components/AddWater";
import ChartA from "../components/ChartA";
import WaterContextProvider from "../contextapi/WaterContext";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import { WaterContext } from "../contextapi/WaterContext";

const HomePage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      localStorage.clear();
      console.log("logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [tips, SetTips] = useState(fruitdata);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49981a81823fbd8b04b42142ae2e2dac&units=metric`;

  const searchCity = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setCity("");
    }
  };
  return (
    <WaterContextProvider>
      <div className="homepage">
        <div
          className="leftdiv"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h1
            className="logo"
            style={{
              color: "#3629B7",
              fontSize: "40px",
              marginTop: "1px",
              backgroundColor: "white",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            FATAFIT
          </h1>
          <div className="menulist">
            <nav>
              <ul>
                <Link to="/exercise">
                  <li>Exercise</li>
                </Link>
                <br />
                <Link to="/nutrition">
                  <li>Nutrition</li>
                </Link>
                <br />
                <Link to="/water">
                  <li>Water</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="logout">
            <button
              onClick={handleLogout}
              style={{
                width: "100px",
                backgroundColor: "#7e76ae",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                color: "white",
              }}
            >
              Logout
            </button>
          </div>
        </div>
        {/* ******************************************************** */}
        <div className="middlediv">
          <div className="topbar">
            <p>Welcome, {user && user.email} </p>
            <div className="searchbar">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={searchCity}
                placeholder="Enter your location"
                type="text"
              />
            </div>
          </div>
          <div className="banner">
            <span>
              <img className="sun" src={sun} />
            </span>
            <div className="weatherData">
              <span>
                <p>{data.name}</p>
              </span>
              <span>{data.main ? <p>{data.main.temp}°C</p> : null}</span>
              <span>
                {data.main ? <p>humidity:{data.main.humidity}</p> : null}
              </span>
            </div>
            <p>Dont forget to take your water bottle with you.</p>
          </div>
          <div className="charts">
            <div className="intakeinfo">
              <ChartA />
              <p>Recommended daily intake is 5000ml</p>
              <div className="intakepie">
                <PieChart />
              </div>
            </div>
            <div className="dailychart">
              <BarChart />
            </div>
          </div>
          <div className="hydratetips">
            <div className="tiphead">
              <h3 style={{ fontSize: "30px", color: "#3629B7" }}>
                Hydration Tips
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "#3629B7",
                }}
              >
                Consuming fruits and fruit juices keep up the hydration levels
              </p>
            </div>
            <div className="tipcards" id="tipcards">
              {tips.map((tip) => {
                const { id, name, description, image } = tip;

                return (
                  <div className="tipcard">
                    <img src={image} alt="img" />
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ***************************************************** */}
        <div className="rightdiv">
          <AddWater />
        </div>
      </div>
    </WaterContextProvider>
  );
};

export default HomePage;
