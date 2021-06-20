import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import ReadIcon from '../images/icons/BookOpenIcon.png';
import ListenIcon from '../images/icons/HeadphonesIcon.png';
import ShareIcon from '../images/icons/ShareIcon.png';

import './DetailsActions.css'

export const DetailsActions = () => {
  return (
    <Grid container xs={12} className="DetailsActions">
      <IconButton item xs={4} className="DetailsActionsButton">
        <div>
          <img src={ReadIcon} alt="" />
          <p>Read</p>
        </div>
      </IconButton>
      <IconButton item xs={4} className="DetailsActionsButton">
        <div className="MiddleButton">
          <img src={ListenIcon} alt="" />
          <p>Listen</p>

        </div>
      </IconButton>
      <IconButton item xs={4} className="DetailsActionsButton">
        <div>
          <img src={ShareIcon} alt="" />
          <p>Share</p>
        </div>
      </IconButton>

    </Grid>
  )
}