import React from 'react';
import classes from './News.module.css';

const News = props => {
  return (
    <div className={classes.News}>
      <h2>{props.header}</h2>
      <p>{props.details}</p>
    </div>
  )
}

export default News;
