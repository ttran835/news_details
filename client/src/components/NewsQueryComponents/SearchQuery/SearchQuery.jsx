import React from 'react';
import styles from './SearchQuery.module.scss';

export default function SearchQuery(props) {
  return (
    <div className="col-xs-12">
      <form onSubmit={props.handleSubmit} className="materialUiShadow">
        <label>
          Article:
          <input
            type="text"
            value={props.value}
            onChange={props.handleChange}
            placeholder="search articles"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
