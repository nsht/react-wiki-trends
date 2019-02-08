import React from 'react';
import Paper from '@material-ui/core/Paper';

const InsightsDisplay = (props) => {
  return (
    <>
    {props.trendDisplay.map((key,index) =>(
      <Paper className="article-card" key={index}>
      <span className="rank">#{index+1}</span>
      <div>{key.displaytitle}</div>
      </Paper>
    ))}
    </>
  );
};

export default InsightsDisplay;
