import { FC } from "react";
import styles from "../styles/components/SearchBox.module.css";

interface SearchBoxProps {
  placeholder: string;
}

export const SearchBox: FC<SearchBoxProps> = (props) => {
  return (
    <div className={styles.container}>
      <img
        width={16}
        height={16}
        src="search.svg"
        alt="Search"
      />

      <input placeholder={props.placeholder} />
    </div>
  );
}