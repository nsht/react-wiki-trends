import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

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
              {props.trendData[key].extract}
            </Typography>
          </CardContent>
        </Card>

        // <Card className="article-card" key={index}>
        //   <CardActionArea>
        //   <CardMedia className="card-media"
        //   image={getThumbnail(props.trendData[key])}
        //   title={props.trendData[key].displaytitle}
        //   />
        // <CardContent>
        //   <Typography gutterBottom variant="h5" component="h2">
        //   {props.trendData[key].title}
        //   </Typography>
        //   <Typography component="p">
        //     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        //     across all continents except Antarctica
        //   </Typography>
        // </CardContent>
        //   </CardActionArea>
        // </Card>

        // <Paper className="article-card" key={index}>
        //   <span className="rank">#{index + 1}</span>
        //   <div className="article-title">{props.trendData[key].title}</div>
        //   <div className="image-container">
        //     <img
        //       src={getThumbnail(props.trendData[key])}
        //       alt={`${props.trendData[key].displaytitle}`}
        //       className="article-image"
        //     />
        //   </div>
        // </Paper>
      ))}
    </>
  );
};

export default InsightsDisplay;
