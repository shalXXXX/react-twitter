import React from 'react'
import { Avatar } from "@mui/material"
import "./SidebarUser.css"

export const SidebarUser = () => {
  return (
    <div className="sidebarUser">
      <Avatar className="sidebarAvatar" src="../icon.jpg"/>
      <div className="accountInfo">
        <h3>sakuren</h3>
        <span>@saku_ren8</span>
      </div>
    </div>
  )
}
