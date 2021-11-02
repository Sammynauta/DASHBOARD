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
           <img src="https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className='Topavatar' alt="fotinho" />
        </div>
      </div>
    </div>
  );
}
