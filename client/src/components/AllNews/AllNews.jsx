import React from 'react';
import styles from './AllNews.module.scss';

console.log({ styles });
export default function AllNews(props) {
  return (
    <div className="container">
      <div className={`row justify-content-center`}>
        <h1
          className={`col-xs-12${styles.testThings} ${styles.materialUiShadow}`}
        >
          Fuck you, Christine, get off my daddy!!
        </h1>
      </div>
    </div>
  );
}
