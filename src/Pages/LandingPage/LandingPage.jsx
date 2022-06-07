import React, { useState, useRef} from "react";
import "./LandingPage.scss";
import "animate.css";
import logo from "../../assets/imgs/logo.png";
import {HiMenu} from "react-icons/hi"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MenuMobile from "./MenuMobile/MenuMobile";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";

const LandingPage = () => {
  const prevScrollY = useRef(0);
  const [changeColor, setChangecolor] = useState(false);
  const [map, setMap] = useState(null);
  const [mobileMenu, setMobilemenu] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.API_KEY,

  });

 //topbar color change
  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;

    if (currentScrollY >= 100) {
      setChangecolor(true);
    } else {
      setChangecolor(false);
    }
    prevScrollY.current = currentScrollY;
  };

  return (
    <>
      <div className="main-container">
        <div className={changeColor ? "topbar active" : "topbar"}>
          <nav>
            <div className="left">
              <img src={logo} alt="" />
            </div>
            <div className="right">
              <a href="#hero">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="/app">
                <button>Open App</button>
              </a>
            </div>
          </nav>
        </div>
        <div className={changeColor ? "topbar-mobile active" : "topbar-mobile"}>
        <HiMenu onClick={() => setMobilemenu(true)}/>
        {mobileMenu ? <MenuMobile setMobilemenu={setMobilemenu}/> : null}
        </div>

        <div className="content" onScroll={onScroll}>
            <Hero/>
            <Services changeColor={changeColor}/>
            <About/>
            <Contact isLoaded={isLoaded} onLoad={onLoad} onUnmount={onUnmount} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
