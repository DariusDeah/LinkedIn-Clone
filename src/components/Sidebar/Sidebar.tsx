import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/userSlice";
import { User } from "../Login/Login";
import "./Sidebar.css";
function Sidebar() {
  const user: User | null = useSelector(userSelector);
  const recentItems = (topic: string) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      {user && (
        <div className="sidebar__top">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <Avatar src={user.profilePicture} />
          <h2>{user.name}</h2>
          <h4>{user.email}</h4>
        </div>
      )}

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Views this week</p>
          <p className="sidebar__statNumber">2,000</p>
        </div>

        <div className="sidebar__stat">
          <p>Post Views</p>
          <p className="sidebar__statNumber">2,400</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <>
          <p>Recent</p>
          {recentItems("reactjs")}
          {recentItems("coding")}
          {recentItems("backend-devs")}
          {recentItems("tutorial")}
        </>
      </div>
    </div>
  );
}

export default Sidebar;
