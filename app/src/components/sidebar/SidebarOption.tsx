import React from 'react'
import "./SidebarOption.css"

type Props = {
  text: string;
  Icon: any;
}
export const SidebarOption = ({text, Icon}: Props ) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

// export default SidebarOption