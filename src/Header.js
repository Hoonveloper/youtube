/*
rce : class componet 생성
rafce : allow function component 생성
rfce : function component 생성
es7 snippets */
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import './Header.css';

function header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"></img>
            </div>
            <div className="header__input">
                <input type="text"></input>
                <button><SearchIcon /></button>
            </div>
            <div className="header__right">
                <VideoCallIcon/>
                <AppsIcon/>
                <NotificationsIcon/>
                <Avatar 
                    alt="kim-jihoon"
                    src="../images/jihoon.jpg"    
                />
            </div>
            
        </div>
    )
}

export default header
