import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={handleClick} src={assets.menu_icon} alt="" className="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
         {collapse ? "" : <p>New Chat</p>} 
        </div>
       {collapse ? "" : <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is React ...</p>
          </div>
        </div>} 
      </div>

      <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
           {collapse ? "" : <p>Help</p>} 
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {collapse ? "" : <p>Activity</p>}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {collapse ? "" : <p>Setting</p>}
          </div>
      </div>
    </div>
  )
}

export default Sidebar