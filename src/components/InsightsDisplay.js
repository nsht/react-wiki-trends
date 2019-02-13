import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const InsightsDisplay = props => {
  const getThumbnail = (obj, default_value = "") => {
    if ("thumbnail" in obj) {
      return obj["thumbnail"].source;
    } else {
      return default_value;
    }
  };
  return (
    <>
      {props.trendDisplay.map((key, index) => (
        <Card className="article-card" key={index}>
          <a
            className="article-link"
            href={props.trendData[key].content_urls.desktop.page}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardHeader
              avatar={<Avatar aria-label="Rank">{index + 1}</Avatar>}
              title={props.trendData[key].displaytitle}
              className="card-header"
              // subheader={props.trendData[key].description}
            />
          </a>
          <CardMedia
            className="card-media"
            image={getThumbnail(props.trendData[key])}
            title={props.trendData[key].displaytitle}
          />
          <CardContent>
            <Typography component="p">
              {/* todo truncate */}
              {props.trendData[key].description}
            </Typography>
          </CardContent>
          <CardActions className="card-action-container">
            <Button variant="outlined" size="medium" color="primary" className="trend-button">
              View Trends
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default InsightsDisplay;
