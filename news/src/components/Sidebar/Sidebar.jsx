import React from 'react';
import {BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsMenuButtonWideFill} from 'react-icons/bs';
import "./Sidebar.css";

function Sidebar(){
    return (
        <aside id="sidebar"> 
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsGrid1X2Fill className="icon"/>Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/manage">
                        <BsFillArchiveFill className="icon"/>News
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/manage">
                        <BsFillGrid3X3GapFill className="icon"/>Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsPeopleFill className="icon"/>Viewers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsMenuButtonWideFill className="icon"/>Reports
                    </a>
                </li>
            </ul>
        </aside>
    )
};

export default Sidebar;