import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import {
  SupervisorAccountRounded,
  BusinessCenterRounded,
  ChatRounded,
  NotificationsRounded,
} from "@mui/icons-material";
import HeaderOption from "../HeaderOption/HeaderOption";
import { userSelector } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { User } from "../Login/Login";
function Header() {
  const user: User | null = useSelector(userSelector);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRounded} title="My Network" />
        <HeaderOption Icon={BusinessCenterRounded} title="Jobs" />
        <HeaderOption Icon={ChatRounded} title="Messaging" />
        <HeaderOption Icon={NotificationsRounded} title="Notifications" />

        {user && (
          <HeaderOption avatar={user.profilePicture} title={user.name} />
        )}
      </div>
    </div>
  );
}

export default Header;
