import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidbar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon'/>
                            Sale
                        </li>
                    </ul>
                 </h3>
            </div>
        </div>
    </div>
  )
}
