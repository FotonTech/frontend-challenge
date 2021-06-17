import { CSSProperties, FC } from "react";

import styles from "../styles/components/HomeSection.module.css";

interface HomeSectionProps {
  sectionLabel: string;
  linkLabel: string;
  style?: CSSProperties;
}

export const HomeSection: FC<HomeSectionProps> = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      <header className={styles.header}>
        <p>{props.sectionLabel}</p>
        <p>{props.linkLabel}</p>
      </header>

      <main>
        {props.children}
      </main>

    </div>
  );
}