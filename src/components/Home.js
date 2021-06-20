import React from 'react';
import { useHistory } from 'react-router-dom';


import WavingHandEmoji from '../images/icons/WavingHandEmoji.png'
import VideoThumbnail from '../images/VideoThumbnail.png';
import Banner1 from '../images/Banner.png';
import Banner2 from '../images/Banner2.png';
import Banner3 from '../images/Banner3.png';
import BookCover from '../images/BookCover.png';
import BookmarkedIcon from '../images/icons/BookmarkedIcon.png';
import './Home.css';

export const Home = () => {
  const history = useHistory();

  const fetchBook = async (id) => {
    const result = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const hooked = await result.json();
    return hooked;
  }


  return(
    <div className="Home">
      <h1>
        Hi, <span>Mehmed Al Fatih</span>
        <img src={WavingHandEmoji} alt="" />
      </h1>
      <div className="HomeSections">
        <div className="HomeSectionsHeader">
          <h2>Discover new books</h2>
          <a href="#">More</a>
        </div>
        <div className="DiscoverBooks">
          <div className="FirstBook" onClick={() => {
          fetchBook("dsz5AwAAQBAJ")
          .then(result => {
              history.push({
                pathname: '/details',
                livro: result,
                query: ''
              })
            });
          }}>
            <img src={Banner1} alt="" />
          </div>
          <div className="SecondBook" onClick={() => {
          fetchBook("PqbDdQvjd8AC")
          .then(result => {
              history.push({
                pathname: '/details',
                livro: result,
                query: ''
              })
            });
          }}>
            <img src={Banner2} alt="" />
          </div>

        </div>

      </div>

      <div className="HomeSections">
        <div className="HomeSectionsHeader">
          <h2>Currently Reading</h2>
          <a href="#">All</a>
        </div>
        <div className="CurrentlyReading" onClick={() => {
          fetchBook("Cy86CQAAQBAJ")
          .then(result => {
              history.push({
                pathname: '/details',
                livro: result,
                query: ''
              })
            });
          }}>
          <img src={Banner3} alt="" className="BannerImage"/>
          <div className="CurrentlyReadingInfo">
            <img src={BookCover} alt="" />
            <div className="CurrentlyReadingDetails">
              <h3>Originals</h3>
              <p>by Adam Grant</p>
              <div className="ChaptersRead">
                <img src={BookmarkedIcon} alt="" />
                <p>Chapter <span>2</span> From 9</p>
              </div>
            </div>
          </div>
        </div>

      </div> 

      <div className="HomeSections">
        <div className="HomeSectionsHeader">
          <h2>Reviews of The Day</h2>
          <a href="#">All Videos</a>
        </div>
        <div className="Review">
          <img src={VideoThumbnail} alt="" />
          <div className="ReviewInfo">
            <h3>Don't Make Me Think - Steve Krug</h3>
            <div className="ReviewVideoDetails">
              <p>Jesse Showalter</p>
              <p>5.2k views</p>
              <p>1 Week ago</p>
            </div>
            <div className="ReviewVideoDescription">
              <p>"Don't Make Me Think" by Steve Krug is one of the first books I read when I was getting into digital design. It helped me move from designing things that just "look nice" to designing things that are usable, useful, memorable and simple to learn and use. </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}