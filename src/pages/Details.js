import React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { DetailsActions } from '../components/DetailsActions';

import Oval1 from '../images/Oval1.png'
import Oval2 from '../images/Oval2.png'
import Oval3 from '../images/Oval3.png'
import Oval4 from '../images/Oval4.png'
import Oval5 from '../images/Oval5.png'


import NoImage from '../images/NoImage.jpg';
import BackIcon from '../images/icons/BackIcon.png'

export const Details = (props) => {
  const history = useHistory();
  const { livro, query } = props.location;
  console.log(livro);

  return (
    <div>
      <div className="DetailsHeader">
        <div className="BackIconDiv"
          onClick={() => {
            history.push({
              pathname: '/',
              query
            })
          }}
        >
          <img src={BackIcon} alt="" />
        </div>
        <img src={Oval1} alt="" style={{position: 'absolute', top: '125px', left:'46px'}}/>
        <img src={Oval2} alt="" style={{position: 'absolute', top: '115px', left:'73px'}}/>
        <img src={Oval3} alt="" style={{position: 'absolute', top: '218px', left:'222px'}}/>
        <img src={Oval4} alt="" style={{position: 'absolute', top: '86px', left:'248px'}}/>
        <img src={Oval5} alt="" style={{position: 'absolute', top: '-34px', left:'297px'}}/>




    
      </div>
      <div className="BookCover">
        <Paper 
          style={{
            height: '230px',
            width: '150px',
            backgroundImage: livro.volumeInfo.imageLinks?.thumbnail ? `url(${livro.volumeInfo.imageLinks?.thumbnail})` : `url(${NoImage})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      

      <div className="Main">
        <div className="DetailsBody">
          <h1>{livro.volumeInfo.title} <span>{livro.volumeInfo.subtitle ? ` : ${livro.volumeInfo.subtitle}` : ''}</span></h1>
          <h3>{livro.volumeInfo.authors ? livro.volumeInfo.authors[0] : 'Unknown'}</h3>
          <div className='DetailsDescription'>
            <p>{livro.volumeInfo.description}</p>
          </div>
        </div>
        <DetailsActions />
      </div>
    </div>

  )

}