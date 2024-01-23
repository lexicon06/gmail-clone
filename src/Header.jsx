import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from "@mui/icons-material/Apps";
//import NotificationsIcon from '@mui/icons-material/Notifications';
import TuneIcon from "@mui/icons-material/Tune";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt=""
        />
      </div>
      <div className="header__mid">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Buscar correo" />

        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar
          src="https://lh3.googleusercontent.com/ogw/AGvuzYYrajRYebqMasr4QW0Tcjx5MDnJ-bM3tf6NY6fi-A=s32-c-mo"
          className="lastChild"
        />
      </div>
    </div>
  );
}

export default Header;
