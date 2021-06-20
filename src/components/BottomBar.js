import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';


import HomeIcon from '../images/icons/HomeIcon.png';
import LibrariesIcon from '../images/icons/BookClosedIcon.png'
import ProfileIcon from '../images/icons/UserIcon.png'

import './BottomBar.css';

export const BottomBar = (props) => {
  const { setQuery } = props;

  return (
    <Grid container xs={12} className="BottomBar">
      <IconButton item xs={4} active className="BottomBarButton ActiveButton" onClick={() => {setQuery('')}}>
        <div>
          <img src={HomeIcon} alt="" />
          <p>Home</p>
        </div>
      </IconButton>
      <IconButton item xs={4} className="BottomBarButton">
        <div>
          <img src={LibrariesIcon} alt="" />
          <p>Libraries</p>
        </div>
      </IconButton>
      <IconButton item xs={4} className="BottomBarButton">
        <div>
          <img src={ProfileIcon} alt="" />
          <p>Profile</p>
        </div>
      </IconButton>
    </Grid>
  )
}
