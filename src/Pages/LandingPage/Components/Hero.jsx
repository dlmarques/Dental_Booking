import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero">
          <div className="hero-image"></div>
          <div className="text">
            <h2>Welcome to Dental Booking</h2>
            <h3>The platform that will change your life </h3>
            <Link>
              <button>Join Us</button>
            </Link>
          </div>
          <div className="scroll-icon animate__animated animate__fadeInDown animate__infinite-infinite">
            <a href="#services">
              <MdOutlineKeyboardArrowDown id="arrow-down" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
