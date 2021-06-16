import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { BottomMenu } from "../components/BottomMenu";
import { HomeSection } from "../components/HomeSection";
import { SearchBox } from "../components/SearchBox";
import SwipeableViews from "react-swipeable-views";

import { BannerData } from "../components/Banner";

import styles from "../styles/pages/Home.module.css";
import axios from "axios";

function Home() {
  const userName = "Mehmed AI Fatih";

  const [banners, setBanners] = useState<BannerData[]>([]);

  useEffect(() => {
    const query = ["hooked", "The one thing gary", "Harry Potter",
      "The little prince", "A tale of two cities", "The Da Vinci code"];

    setBanners([]);

    console.log("Rerendered");

    axios.all([
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query[0]}`),
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query[1]}`),
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query[2]}`),
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query[3]}`),
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query[4]}`),
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query[5]}`),
    ])
      .then(axios.spread((res1, res2, res3, res4, res5, res6) => {
        setBanners(banners => [...banners, res1.data.items[0]])
        setBanners(banners => [...banners, res2.data.items[2]])
        setBanners(banners => [...banners, res3.data.items[0]])
        setBanners(banners => [...banners, res4.data.items[0]])
        setBanners(banners => [...banners, res5.data.items[0]])
        setBanners(banners => [...banners, res6.data.items[0]])
      }), error => {
        console.error(error);
      });
  }, []);

  const [mainIndex, setMiddleIndex] = useState<number>(0);

  const handleSwipe = (index: number, indexLatest: number) => {
    if (index > indexLatest) {
      setMiddleIndex(mainIndex + 1);
    }
    else {
      setMiddleIndex(mainIndex - 1);
    }
  }

  const round = (number: number) => {
    let string = number.toString();
    let editedNumber = string.slice(0, -1);
    let roundedNumber = editedNumber.concat("0");

    return Number(roundedNumber);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SearchBox placeholder="Search book" />
      </header>

      <svg className={styles.oval1} width="80" height="127" viewBox="0 0 80 127" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <circle cx="63.5" cy="63.5" r="63.5" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.319742" height="0.056425">
            <use xlinkHref="#image0" transform="scale(0.00940417)" />
          </pattern>
          <image id="image0" width="34" height="6" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC" />
        </defs>
      </svg>

      <main>
        <div className={styles.welcomeMessage}>
          <p>Hi,&nbsp;</p>
          <p>{userName}</p>
          <img
            width={24}
            height={24}
            src="wave-hand.png"
            alt="Wave hand"
          />
        </div>

        <HomeSection sectionLabel="Discover new book" linkLabel="More">
          <SwipeableViews
            style={{
              width: "80vw",
              paddingLeft: "20px",
              overflow: "visible",
            }}
            slideStyle={{
              margin: "auto",
              paddingRight: "10px",
              flex: "none",
            }}
            enableMouseEvents
            hysteresis={0}
            onChangeIndex={(index, indexLatest) => handleSwipe(index, indexLatest)}
          >
            {banners.map((banner, index) => (
              <Banner
                key={index}
                showBannerCircle={mainIndex === index ? true : false}
                style={{
                  width: mainIndex === index ? "272px" : "250px",
                  height: mainIndex === index ? "139px" : "128px",
                  padding: mainIndex === index ? "17px 20px 22px 20px" : "14px 15px 15px 15px",
                  background: mainIndex === index ?
                    "var(--primary-banner-backgorund-color)" :
                    "var(--secondary-banner-background-color)"
                }}
                titleStyle={{
                  fontSize: index === mainIndex ? "27px" : "25px",
                  lineHeight: index === mainIndex ? "35.99px" : "33.32px",
                }}
                authorStyle={{
                  fontSize: index === mainIndex ? "14px" : "12px",
                  lineHeight: index === mainIndex ? "16.41px" : "14.06px",
                  letterSpacing: index === mainIndex ? "1.29px" : "1.1047619581222534px"
                }}
                bookName={banner.volumeInfo.title !== undefined ?
              banner.volumeInfo.title :
              "Unknown title"
            }
                bookAuthor={banner.volumeInfo.authors !== undefined ?
              banner.volumeInfo.authors[0] :
              "Unknown author"
            }
                pageCount={index === 0 ? 120 : (
              index === 1 ? 90 : (
                banner.volumeInfo.pageCount !== undefined ?
                  round(banner.volumeInfo.pageCount) : 1
              )
            )}
                bookCover={banner.volumeInfo.imageLinks !== undefined ?
              banner.volumeInfo.imageLinks.thumbnail :
              "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
            }
              />
            ))}
          </SwipeableViews>
        </HomeSection>
      </main>

      <footer className="footer">
        <BottomMenu />
      </footer>
    </div>
  );
}

export default Home;
