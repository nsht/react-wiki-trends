import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const InsightCard = props => {
  const getThumbnail = (obj, default_value = "") => {
    if ("thumbnail" in obj) {
      return obj["thumbnail"].source;
    } else {
      return default_value;
    }
  };

  return (
    <Card className="article-card" key={props.index}>
      <a
        className="article-link"
        href={props.trendData.content_urls.desktop.page}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardHeader
          avatar={<Avatar aria-label="Rank">{props.index + 1}</Avatar>}
          title={props.trendData.displaytitle}
          className="card-header"
          // subheader={props.trendData.description}
        />
      </a>
      <CardMedia
        className="card-media"
        image={getThumbnail(props.trendData)}
        title={props.trendData.displaytitle}
      />
      <CardContent>
        <Typography component="p">
          {/* todo truncate */}
          {props.trendData.description.replace(/^\w/, c => c.toUpperCase())}
        </Typography>
      </CardContent>
      <CardActions className="card-action-container">
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          className="trend-button"
        >
          View Trends
        </Button>
      </CardActions>
    </Card>
  );
};

export default InsightCard;
