import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon  from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcom from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

import {Link} from 'react-router-dom'

import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidbar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/">
                        <li className="sidebarListItem">
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                        </Link>
                        <Link to="/Analytics">
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analytics
                        </li>
                        </Link>
                        <Link to="/Sale">
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon'/>
                            Sale
                        </li>
                        </Link>
                    </ul>
            </div>
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/Users" className='Link'>
                        <li className="sidebarListItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                            Users
                        </li>
                        </Link>
                        <Link to="/NewUsers" className='Link'>
                        <li className="sidebarListItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                            New Users
                        </li>
                        </Link>
                        <Link to="/Products" className='Link'>
                        <li className="sidebarListItem">
                            <StorefrontIcon className='sidebarIcon'/>
                            Products
                        </li>
                        </Link>
                        <Link to="/Transaction" className='Link'>

                        <li className="sidebarListItem">
                            <AttachMoneyIcon className='sidebarIcon'/>
                            Transaction
                        </li>
                        </Link>
                        <Link to="/Reports" className='Link'>
                        <li className="sidebarListItem">
                            <MailOutlineIcom className='sidebarIcon'/>
                            Reports
                        </li>
                        </Link>
                    </ul>
            </div>
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcom className='sidebarIcon'/>
                            Mail
                        </li>
                
                        <li className="sidebarListItem">
                            <FeedbackOutlinedIcon className='sidebarIcon'/>
                            Feedback
                        </li>
                   
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
            </div>
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcom className='sidebarIcon'/>
                            Manage
                        </li>
                
                        <li className="sidebarListItem">
                            <FeedbackOutlinedIcon className='sidebarIcon'/>
                            Analytics
                        </li>
                   
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
            </div>
        </div>
    </div>
  )
}
