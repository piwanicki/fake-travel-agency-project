import React from 'react';
import classes from './DescriptionText.module.scss';
import recomendationLogo from './recommendationLogo.jpg';

const DescriptionText = props => {
  return (
    <div className={classes.DescriptionText}>
      <div className={classes.RecommendationContent}>
        <img src={recomendationLogo} alt='recommendation' className={classes.RecomendationLogo}/>
        <h3> Highly recommended offer!</h3>
      </div>
      <div className={classes.DetailsSection}>
            {props.details}
        </div>
    </div>
  )
}

export default DescriptionText;