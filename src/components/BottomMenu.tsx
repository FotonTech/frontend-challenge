import { FC, useState } from "react";
import styles from "../styles/components/BottomMenu.module.css";

export const BottomMenu: FC = (props) => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className={styles.container}>
      <div
        tabIndex={1}
        className={styles.wrapper}
        style={{
          stroke: selectedPage === "home" ? "#000000" : "",
          color: selectedPage === "home" ? "var(--menu-text-color)" : ""
        }}
        onClick={() => setSelectedPage("home")}
      >
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.22222L9 0L17 6.22222V16C17 16.9818 16.2041 17.7778 15.2222 17.7778H2.77778C1.79594 17.7778 1 16.9818 1 16V6.22222Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6.33333 17.7778V8.88892H11.6667V17.7778" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <p className={styles.label}>Home</p>
      </div>

      <div
        tabIndex={2}
        className={styles.wrapper}
        style={{
          stroke: selectedPage === "libraries" ? "#000000" : "",
          color: selectedPage === "libraries" ? "var(--menu-text-color)" : ""
        }}
        onClick={() => setSelectedPage("libraries")}
      >
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 15.75C1 14.5074 2.00736 13.5 3.25 13.5H15.4" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 0H15.4V18H3.25C2.00736 18 1 16.9926 1 15.75V2.25C1 1.00736 2.00736 0 3.25 0Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <p className={styles.label}>Libraries</p>
      </div>

      <div
        tabIndex={3}
        className={styles.wrapper}
        style={{
          stroke: selectedPage === "profile" ? "#000000" : "",
          color: selectedPage === "profile" ? "var(--menu-text-color)" : ""
        }}
        onClick={() => setSelectedPage("profile")}
      >
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="9" cy="4" r="4" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <p className={styles.label}>Profile</p>
      </div>
    </div >
  );
}