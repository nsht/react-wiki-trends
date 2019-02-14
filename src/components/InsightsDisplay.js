import React from "react";
import InsightCard from './InsightCard';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const InsightsDisplay = props => {

  return (
    <>
      {props.trendDisplay.map((key, index) => (
        <InsightCard trendData = {props.trendData[key]} index = {index} ></InsightCard>
      ))}
    </>
  );
};

export default InsightsDisplay;
