import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className = "header">


            {/* Person Icon button */}
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            {/* Tinder Icon Image */}
            <img
                className = "header_logo"
                src = "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
                alt = "tinder_mainlogo"
            />

            {/* ForumIcon  */}
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>

        </div>
    );
}

export default Header
