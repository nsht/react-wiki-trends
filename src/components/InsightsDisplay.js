import React from 'react';


const InsightsDisplay = (props) => {
  return (
    <ol>
    {props.trendDisplay.map(key =>(
      <li key={key.rank}>{key.article}</li>
    ))}
    </ol>
  );
};

export default InsightsDisplay;
