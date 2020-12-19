import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MDEditor from "@uiw/react-md-editor";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    maxWidth: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  media: {
    height: 0,
    maxWidth: 1000,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: ".7rem",
  },
  imageContent: {
    margin: "auto",
    width: "100%",
    height: "auto",
    maxWidth: 700,
  },
  paragraph: {
    textAlign: "justify",
  },
  imgWrapper: {
    marginTop: 30,
    marginBottom: 30,
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Post = ({ id, data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <StyledLink to={'blog/' + id} >
      <CardHeader
        className={classes.header}
        action={
          <IconButton aria-label="settings">{/*<MoreVertIcon />*/}</IconButton>
        }
        title={<span className={classes.title}>{data.title}</span>}
        subheader={<span className={classes.subheader}>{data.date} Czas czytania: {data.time}</span>}
      />

      <CardMedia
        className={classes.media}
        image={data.imageURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.shortDesc}
        </Typography>
      </CardContent>
      </StyledLink>
      <CardActions disableSpacing>
        <Button onClick={handleExpandClick} variant="contained" color="primary">
          Czytaj więcej
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <p className={classes.paragraph}>
              <MDEditor.Markdown source={data.content} />
            </p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
