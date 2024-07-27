import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";


import './Widget.css'

export default function Widget() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Joined Member</span>
        <ul className="widgetSmList">
        <li className="widgetSmListItem">
                <img src="images/Profile/prof1.jfif" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Name1</span>
                    <span className="widgetSmUserTitle">Title1</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="images/Profile/prof2.jfif" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Name1</span>
                    <span className="widgetSmUserTitle">Title1</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="images/Profile/prof3.jfif" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Name1</span>
                    <span className="widgetSmUserTitle">Title1</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="images/Profile/prof4.jfif" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Name1</span>
                    <span className="widgetSmUserTitle">Title1</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>
        </ul>
    </div>
  )
}
