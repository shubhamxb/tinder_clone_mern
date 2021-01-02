import React from 'react'
import "./SwipeButtons.css"
import IconButton from '@material-ui/core/IconButton';

//buttons
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="medium" className="header_icon" />
            </IconButton>

            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="medium" className="header_icon" />
            </IconButton>

            <IconButton className="swipeButtons_star">
                <StarRateIcon fontSize="medium" className="header_icon" />
            </IconButton>
            
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="medium" className="header_icon" />
            </IconButton>

            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="medium" className="header_icon" />
            </IconButton>

        </div>
        
    )
}

export default SwipeButtons
