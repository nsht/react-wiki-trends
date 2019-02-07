import React from 'react';
import Paper from '@material-ui/core/Paper';

const InsightsDisplay = (props) => {
  return (
    <>
    {props.trendDisplay.map((key,index) =>(
      <Paper className="article-card" key={key.rank}>
      {key.article}
      </Paper>
    ))}
    </>
  );
};

export default InsightsDisplay;
