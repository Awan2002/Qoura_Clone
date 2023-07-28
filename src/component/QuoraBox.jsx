import { Avatar } from "@mui/material"
import "../css/QuoraBox.css"
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
        <div className="quoraBox_info">
            <Avatar 
              src={user.photo}
            />
            <h5>{user.displayName}</h5>
        </div>
        <div className="quoraBox_quora">
            <p>What is your Question or LInk ?</p>
        </div>
    </div>
  )
}

export default QuoraBox