import React, { useState, createContext, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./App.scss";
import CalendarPage from "./Calendar/Calendar";
import Dashboard from "./Dashboard/Dashboard";
import Inbox from "./Inbox/Inbox";
import Invoices from "./Invoices/Invoices";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const themeContext = createContext({
  dark: false,
  setDark: () => {},
});

export const ThemeContext = createContext();

const App = () => {
  const [dark, setDark] = useState(false);
  const [date, setDate] = useState(new Date());

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  
    useEffect(() => {

      const getData = async () => {
        try{
          const response = await fetch(`https://randomuser.me/api/?results=1`);
          if(!response.ok){
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          let actualData = await response.json();
          setUserData(actualData.results);
        }catch(err){
          setError(err.message)
          setUserData(null)
        }finally{
          setLoading(false)
        }
      }

      getData()

  }, [])


  const theme = { dark, setDark };



  let { path } = useRouteMatch();
  return (
    <>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <div className="container-main">
          <Sidebar userData={userData}  />
          <div
            className={dark ? "content-container dark" : "content-container"}
          >
            <Topbar/>
            <Switch>
              <Route exact path={path}>
                <Dashboard dark={dark} date={date} setDate={setDate} userData={userData} />
              </Route>
              <Route path="/app/calendar">
                <CalendarPage dark={dark} date={date} setDate={setDate} />
              </Route>
              <Route path="/app/inbox">
                <Inbox />
              </Route>
              <Route path="/app/invoices">
                <Invoices/>
              </Route>
              <Route path="/app/settings">Settings</Route>
            </Switch>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
