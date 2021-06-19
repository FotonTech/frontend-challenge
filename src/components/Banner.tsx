import { CSSProperties, FC } from "react";

import styles from "../styles/components/Banner.module.css";

interface BannerProps {
  bookName: string;
  bookAuthor: string;
  pageCount: number;
  bookCover: string;
  style?: CSSProperties;
  tabIndex?: number;
  showBannerCircle: boolean;
  titleStyle?: CSSProperties;
  authorStyle?: CSSProperties;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Banner: FC<BannerProps> = (props) => {
  return (
    <div
      className={styles.container}
      style={props.style}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
    >
      {props.showBannerCircle && (
        <svg className={styles.oval2} width="102" height="114" viewBox="0 0 102 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle cx="38.5" cy="63.5" r="63.5" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.319742" height="0.056425">
              <use xlinkHref="#image0" transform="scale(0.00940417)" />
            </pattern>
            <image id="image0" width="34" height="6" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC" />
          </defs>
        </svg>
      )}

      <p className={styles.title} style={props.titleStyle}>{props.bookName}</p>
      <p className={styles.author} style={props.authorStyle}>{props.bookAuthor}</p>

      <div className={styles.pageCount}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66667 11.3333V3.66665C2.66667 3.11436 3.11438 2.66665 3.66667 2.66665H12.3333C12.8856 2.66665 13.3333 3.11436 13.3333 3.66665V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H3.33333C2.96514 13.3333 2.66667 13.6318 2.66667 14C2.66667 14.3682 2.96514 14.6666 3.33333 14.6666H12.3333C13.622 14.6666 14.6667 13.622 14.6667 12.3333V3.66665C14.6667 2.37798 13.622 1.33331 12.3333 1.33331H3.66667C2.378 1.33331 1.33333 2.37798 1.33333 3.66665V11.3333C1.33333 11.7015 1.63181 12 2 12C2.36819 12 2.66667 11.7015 2.66667 11.3333Z" fill="white" fillOpacity="0.653491" />
          <path d="M4.33333 8.66667V10.6667C4.33333 11.0349 4.63181 11.3333 5 11.3333C5.36819 11.3333 5.66667 11.0349 5.66667 10.6667V8.66667C5.66667 8.29848 5.36819 8 5 8C4.63181 8 4.33333 8.29848 4.33333 8.66667Z" fill="#C8C8C8" />
          <path d="M10.3333 7.33335V10.6667C10.3333 11.0349 10.6318 11.3334 11 11.3334C11.3682 11.3334 11.6667 11.0349 11.6667 10.6667V7.33335C11.6667 6.96516 11.3682 6.66669 11 6.66669C10.6318 6.66669 10.3333 6.96516 10.3333 7.33335Z" fill="#C8C8C8" />
          <path d="M7.33333 5.33335V10.6667C7.33333 11.0349 7.63181 11.3334 8 11.3334C8.36819 11.3334 8.66667 11.0349 8.66667 10.6667V5.33335C8.66667 4.96516 8.36819 4.66669 8 4.66669C7.63181 4.66669 7.33333 4.96516 7.33333 5.33335Z" fill="#C8C8C8" />
          <circle cx="11" cy="5.33335" r="0.666667" fill="#C8C8C8" />
        </svg>

        <p className={styles.pageCountNumber}>{props.pageCount}+</p>
        <p className={styles.pageCountText}>Read Now</p>
      </div>

      <img className={styles.bookCover} src={props.bookCover} alt="Book cover" />

      <svg className={styles.triangle} width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.81349 0.795898L0.5 29.0133L33.3682 7.67883L3.81349 0.795898Z" fill="#FCBC48" />
      </svg>

      <img className={styles.rectangle} src="rectangle.svg" alt="" />

      <img className={styles.ring} src="ring.svg" alt="" />

    </div>
  );
}