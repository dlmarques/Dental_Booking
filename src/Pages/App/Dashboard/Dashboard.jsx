import React from "react";
import "./Dashboard.scss";
import { FaUser } from "react-icons/fa";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { FaFileInvoiceDollar } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Card } from "@nextui-org/react";
import UserCard from "./UserCard";

const Dashboard = ({ date, setDate, userData }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="dashboard-container">
      <div className={theme.dark ? "second-bar dark" : "second-bar"}>
        <Card
          clickable
          css={{
            mw: "300px",
            height: "100px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="text-card">
            <h3>Appointments</h3>
            <p>15</p>
          </div>

          <div>
            <BsFillCalendar2CheckFill />
          </div>
        </Card>
        <Card
          clickable
          css={{
            mw: "300px",
            mh: "100px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="text-card">
            <h3>Messages</h3>
            <p>1</p>
          </div>

          <div>
            <SiGooglemessages />
          </div>
        </Card>
        <Card
          clickable
          css={{
            mw: "300px",
            mh: "100px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="text-card">
            <h3>Payments Left</h3>
            <p>3</p>
          </div>

          <div>
            <FaFileInvoiceDollar />
          </div>
        </Card>
        <Card
          clickable
          css={{
            mw: "300px",
            mh: "100px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="text-card">
            <h3>New Clients</h3>
            <p>29</p>
          </div>

          <div>
            <FaUser />
          </div>
        </Card>
      </div>
      <div className={theme.dark ? "cards-dashboard dark" : "cards-dashboard"}>
      <UserCard userData={userData}/>
        <Calendar
          className={theme.dark ? "calendar dark" : "calendar"}
          onChange={setDate}
          value={date}
        />
      </div>
    </div>
  );
};

export default Dashboard;
