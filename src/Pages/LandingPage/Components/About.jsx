import React from 'react'
import logo from "../../../assets/imgs/logo.png";
const About = () => {
  return (
    <>
              <section id="about">
            <div className="about-container">
              <div className="about">
                <div className="left">
                  
                  <img src={logo} alt="" />
                </div>
                <div className="right">
                  <h2>About</h2>
                  <p>
                    Dental Booking is an application with the aim of
                    facilitating numerous tasks of a health clinic, in this case
                    used as for example for dentistry, it is expected to
                    facilitate contact between the clinic and clients,
                    facilitate the scheduling of appointments, and facilitate
                    the payment settlement.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default About