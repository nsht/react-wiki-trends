import React from "react";
import Paper from "@material-ui/core/Paper";

const InsightsDisplay = props => {
  const getThumbnail = (obj, default_value = "") => {
    if ('thumbnail' in obj) {
      return obj['thumbnail'].source;
    } else {
      return default_value;
    }
  };
  return (
    <>
      {props.trendDisplay.map((key, index) => (
        <Paper className="article-card" key={index}>
          <span className="rank">#{index + 1}</span>
          <div>{key.displaytitle}</div>
          <div className="image-container">
          <img
            src={getThumbnail(key)}
            alt={`${key.displaytitle}`}
            className="article-image"
          />
          </div>
        </Paper>
      ))}
    </>
  );
};

export default InsightsDisplay;
