import React from 'react';
import styles from './AllNews.css';

export default function AllNews(props) {
  return (
    <div className="container">
      <div className={`row ${styles.materialUiShadow}`}>
        <h1 className={styles.testThings}>Hello, I am from AllNews</h1>
      </div>
    </div>
  );
}
