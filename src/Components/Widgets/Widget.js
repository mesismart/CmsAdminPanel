import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMember } from "../../datas";

import "./Widget.css";

export default function Widget() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Member</span>
      <ul className="widgetSmList">
        {newMember.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.img} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.title}</span>
              <span className="widgetSmUserTitle">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
