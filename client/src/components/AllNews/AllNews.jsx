import React from 'react';
import styles from './AllNews.module.scss';

console.log({ styles });
export default function AllNews(props) {
  return (
    <div className="container">
      <div className={`row ${styles.materialUiShadow}`}>
        <h1 className={styles.testThings}>Hello, I am from AllNews</h1>
      </div>
    </div>
  );
}
