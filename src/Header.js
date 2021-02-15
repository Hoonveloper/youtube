/*
rce : class componet 생성
rafce : allow function component 생성
rfce : function component 생성
es7 snippets */
import React , {useState}  from "react";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    const [inputSearch,setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <MenuIcon/>
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"></img>
                </Link>
            </div>
            <div className="header__input">
                <input  onChange={
                    e=>setInputSearch(e.target.value)}
                    value={inputSearch} type="text" placeholder="Search"></input>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar className="header__icon" 
                    alt="kim-jihoon"
                    src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA3MTVfMzYg/MDAxNTAwMTIxODIyNDc0.MnAbxbhC7MyERgBkfBApQHIjOXV4RVjkknPRvTUKUT8g.kreXBAA2kzdUuM9_EqCPrqzrJxn3RMP0iZeukBVpDsQg.JPEG.cream_lemon/%EA%B9%80%EC%A7%80%ED%9B%88.jpg?type=w740"    
                />
            </div>
            
        </div>
    )
}

export default Header
