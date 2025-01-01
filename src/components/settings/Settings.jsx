import React from 'react'
import "./Setting.css"
import { Link } from 'react-router-dom'


const Settings = ({isopen,toggleSettings}) => {



  return (
    <div className={`settings-overlay ${isopen ? "open" : ""}`}>
      <div className="settings-container" >
        <div className="settings-header">
          <h2>Settings</h2>
          <button onClick={toggleSettings} className="close-btn">
            ✕
          </button>
        </div>
        <div className="settings-content">
          <div className="settings-item">Profile</div>
          <div className="settings-item">Notifications</div>
          <div className="settings-item">Privacy</div>
          <div className="settings-item">Help</div>
          <div className="settings-item"><Link to="/login">Login</Link></div>
          <div className="settings-item"><Link to="/signup">Signup</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Settings