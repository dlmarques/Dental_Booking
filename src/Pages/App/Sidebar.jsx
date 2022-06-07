import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import user from "../../assets/imgs/user.jpg";
import { MdDashboard } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ userData }) => {

    return (
    <div className="sidebar">
        {userData ?
          userData.map(({id, name, picture}) => 
            (
              <div className="profile" key={id}>
              <div className="picture">
                
                <img src={picture.medium} alt="" />
              </div>
              <div className="text">
               <h4>{name.first} {name.last}</h4>
              </div>
            </div>
            )
          )
          : null
          }
  
      <div className="links">
        <Link to="/app">
          <div className="menu-link">
            <MdDashboard />
            <h4>Dashboard</h4>
          </div>
        </Link>
        <Link to="/app/calendar">
          <div className="menu-link">
            <BsFillCalendarDateFill />
            <h4>Calendar</h4>
          </div>
        </Link>
        <Link to="/app/inbox">
          <div className="menu-link">
            <SiGooglemessages />
            <h4>Inbox</h4>
          </div>
        </Link>
        <Link to="/app/invoices">
          <div className="menu-link">
            <FaFileInvoiceDollar />
            <h4>Invoices</h4>
          </div>
        </Link>
        <Link to="/app/settings">
          <div className="menu-link">
            <IoMdSettings />
            <h4>Settings</h4>
          </div>
        </Link>
      </div>
      <div className="logout">
        <Link to="/">
          <div className="menu-link">
            <HiOutlineLogout />
            <h4>Logout</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
