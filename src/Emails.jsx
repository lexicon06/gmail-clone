import React from "react";
import "./Emails.css";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MoreVert } from "@mui/icons-material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Emails() {
  return (
    <div className="email">
      <div className="email__top_navbar">
        <div className="email__top_navbar-left">
          <IconButton>
            <CropSquareIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>

          <IconButton>
            <RefreshIcon />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email__top_navbar-right">
          <p>Ahora si, Antes no</p>

          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>

          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Emails;
