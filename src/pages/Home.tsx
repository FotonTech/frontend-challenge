import {
  Link
} from 'react-router-dom';
import { BottomMenu } from '../components/BottomMenu';
import { SearchBox } from '../components/SearchBox';

import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <header className="header">
        <SearchBox placeholder="Search book" />
      </header>

      <main className="main">
        <div className={styles.welcomeMessage}>
          <p>Hi,&nbsp;</p>
          <p>Mehmed AI Fatih</p>
          <img
            width={24}
            height={24}
            src="wave-hand.png"
            alt="Wave hand"
          />
        </div>
      </main>

      <footer className="footer">
        <BottomMenu />
      </footer>
    </div>
  );
}

export default Home;
