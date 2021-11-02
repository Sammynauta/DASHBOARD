import React from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ReactAdmin</span>
        </div>
        <div className="topRight">
           <div className="IconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
           </div>
           <div className="IconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
           </div>
           <div className="IconContainer">
            <Settings/>
           </div>
        </div>
      </div>
    </div>
  );
}
