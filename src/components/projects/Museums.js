import React from "react"
import { useState } from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"

import CardHeader from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import YouTubeIcon from "@mui/icons-material/YouTube"
import GitHubIcon from "@mui/icons-material/GitHub"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import museummapper from "../../assets/museummapper.png"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

function Museums() {
  const [expanded, setExpanded] = useState(false)
  const [dense, setDense] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <>
      {" "}
      <Card item xs={3} sx={{ width: "75vw", padding: "10px" }}>
        <CardHeader title="Museum Mapper" subheader="Full Stack Application" />
        <Typography variant="caption">
          Explore DC & tickets to Smithsonian Museums
          <br />
          <br />
        </Typography>

        <CardMedia
          component="img"
          height="auto"
          image={museummapper}
          alt="Museum Mapper"
          border="1px solid"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Technologies:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            JavaScript React | Ruby on Rails | MUI | Stripe | MapBox | SQLite3 |
            Bcrypt
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.loom.com/share/113f901ac82f4742b1face0276535646"
              )
            }
            aria-label="youtube link"
          >
            <YouTubeIcon size="large" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://github.com/nccandiotti/museum-mapper/commits/main"
              )
            }
          >
            <GitHubIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              style={{ justifyContent: "center" }}
              align="center"
              paragraph
            >
              Description
            </Typography>
            <Typography align="left">
              <ul>
                <li>
                  {" "}
                  <Typography variant="caption" align="left">
                    Built Rails backend API using SQLite3 for data persistence
                    and BCrypt for authentication
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" align="left">
                    Followed RESTful conventions, applied MVC pattern, and built
                    CRUD functionality for resources
                  </Typography>{" "}
                </li>{" "}
                <li>
                  <Typography variant="caption" align="left">
                    Integrated third party data via MapBox and Stripe{" "}
                  </Typography>{" "}
                </li>{" "}
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default Museums
