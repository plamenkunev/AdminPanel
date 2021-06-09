import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"
import "../../icons/pk.ico"

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        PaCo
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="avatar" className="topAvatar"/>




                </div>
            </div>
        </div>
    )
}
export default Topbar
