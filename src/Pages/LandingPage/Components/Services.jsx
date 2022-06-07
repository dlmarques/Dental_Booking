import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineEditCalendar } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Services = ({changeColor}) => {
  return (
    <>
              <section id="services">
            <h2>Services</h2>
            <div className="services-container">
              <div
                className={
                  changeColor
                    ? "service animate__animated animate__fadeInLeft"
                    : "service"
                }
              >
                <div className="top">
                  <span>
                    <AiOutlineMessage id="message" />
                  </span>
                </div>
                <div className="bot">
                  <h3>Message System</h3>
                  <p>
                    We provide a messaging system to facilitate contact between
                    clients and doctors or administrators.
                  </p>
                </div>
              </div>
              <div
                className={
                  changeColor
                    ? "service animate__animated animate__flipInY"
                    : "service"
                }
              >
                <div className="top">
                  <span>
                    <MdOutlineEditCalendar id="calendar" />
                  </span>
                </div>
                <div className="bot">
                  <h3>Booking System</h3>
                  <p>
                    We provide a system for scheduling appointments, so that
                    scheduling is convenient and fast.
                  </p>
                </div>
              </div>
              <div
                className={
                  changeColor
                    ? "service animate__animated animate__fadeInRight"
                    : "service"
                }
              >
                <div className="top">
                  <span>
                    <FaFileInvoiceDollar id="invoice" />
                  </span>
                </div>
                <div className="bot">
                  <h3>Check Invoices</h3>
                  <p>
                    With our app you can consult all invoices passed digitally.
                  </p>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Services