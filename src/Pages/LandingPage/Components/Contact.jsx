import React from 'react'
import { GoogleMap } from "@react-google-maps/api";

const Contact = ({isLoaded, onLoad, onUnmount}) => {
  return (
    <>
        <section id="contact">
            <div className="contact-container">
              <div className="right">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{
                      width: "30vw",
                      height: "45vh",
                      borderRadius: "20px",
                    }}
                    center={{ lat: 38.7223, lng: 9.1393 }}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  
                  >
                    <></>
                  </GoogleMap>
                ) : null}
              </div>
              <div className="left">
                <h2>Contact Us</h2>
                <p>1906 Stehr Prairie, Bilzen, USA</p>
                <p>+1-308-489-1390</p>
                <p>howell.retta@hotmail.com</p>
              </div>
            </div>
          </section>
    </>
  )
}

export default Contact