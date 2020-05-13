import React from "react";
import classes from "./NewsContainer.module.scss";
import News from "./News/News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const NewsContainer = props => {
  return (
    <div className={classes.NewsContainer}>
      <div className={classes.NewsHeaderBox}>
        <span style={{ textAlign: "left" }}>News</span>
        <a href="/#">
          Read more... <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </a>
      </div>

      <News
        header={"CORONA VIRUS"}
        details={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus dictum tellus, sit amet lobortis ligula vulputate eu. Maecenas fringilla finibus quam, tincidunt facilisis nisi semper ultrices."
        }
      />
      <News
        header={"CORONA VIRUS"}
        details={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus dictum tellus, sit amet lobortis ligula vulputate eu. Maecenas fringilla finibus quam, tincidunt facilisis nisi semper ultrices."
        }
      />
      <News
        header={"CORONA VIRUS"}
        details={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus dictum tellus, sit amet lobortis ligula vulputate eu. Maecenas fringilla finibus quam, tincidunt facilisis nisi semper ultrices."
        }
      />
    </div>
  );
};

export default NewsContainer;
