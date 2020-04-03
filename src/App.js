import React, { Component } from 'react';
import './App.css';
import Introduction from './components/introduction'
import About from './components/about'
import Sidebar from './components/sidebar'
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          	</div>
      	</div>
      </div>
  );
}

export default App;