import React from "react";
import "./SideBar.css";
//import AddIcon from '@mui/icons-material/Add'
import CreateIcon from "@mui/icons-material/Create";
import SendIcon from "@mui/icons-material/Send";
import InboxIcon from "@mui/icons-material/Inbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
//import DetailsIcon from '@mui/icons-material/Details';
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__compose">
        <CreateIcon className="sidebar__compose_icon" />
        <p>Redactar</p>
      </div>

      <div className="sidebar__button">
        <InboxIcon style={{ fontSize: 18 }} /> Recibidos <p>5051561</p>
      </div>

      <div className="sidebar__button">
        <StarOutlineIcon style={{ fontSize: 18 }} /> Destacados
      </div>

      <div className="sidebar__button">
        <AccessTimeIcon style={{ fontSize: 18 }} /> Pospuestos
      </div>

      <div className="sidebar__button">
        <SendIcon style={{ fontSize: 18 }} /> Enviados
      </div>

      <div className="sidebar__button">
        <InsertDriveFileIcon style={{ fontSize: 18 }} /> Borradores
      </div>

      <div className="sidebar__button">
        <KeyboardArrowDownIcon style={{ fontSize: 18 }} /> Más
      </div>

      <div className="sidebar__labels">
        Etiquetas{" "}
        <IconButton>
          <AddIcon />{" "}
        </IconButton>
      </div>
    </div>
  );
}

export default SideBar;
