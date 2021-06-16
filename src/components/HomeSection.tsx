import { FC } from "react";

import styles from "../styles/components/HomeSection.module.css";

interface HomeSectionProps {
  sectionLabel: string;
  linkLabel: string;
}

export const HomeSection: FC<HomeSectionProps> = (props) => {
  return (
    <div className={styles.container}>
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