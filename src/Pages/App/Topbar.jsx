import React, { useState, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdSettings, IoMdNotifications } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import SwitchDarkMode from "./SwitchDarkMode";
import { ThemeContext } from "./App";
import { Popover, Button, Text } from "@nextui-org/react";

const Topbar = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="topbar-app">
      <div className="left">
        <FaHome />
        {window.location.pathname === "/app" ? "/ Dashboard" : null}
        {window.location.pathname === "/app/calendar" ? "/ Calendar" : null}
        {window.location.pathname === "/app/inbox" ? "/ Inbox" : null}
        {window.location.pathname === "/app/invoices" ? "/ Invoices" : null}
        {window.location.pathname === "/app/settings" ? "/ Settings" : null}
      </div>
      <div className="right">
        <SwitchDarkMode />
        <div className="input-box">
          <div className="icon">
            <span>
              <HiSearch />
            </span>
          </div>
          <input
            type="text"
            placeholder="Search"
            id="search"
            autocomplete="off"
          />
        </div>
        <Popover>
          <Popover.Trigger>
            <Button auto>
              <IoMdSettings />
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>Settings</Text>
          </Popover.Content>
        </Popover>

        <Popover>
          <Popover.Trigger>
            <Button auto  >
            <IoMdNotifications/>
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>Notifications</Text>
          </Popover.Content>
        </Popover>
      </div>
    </div>
  );
};

export default Topbar;
