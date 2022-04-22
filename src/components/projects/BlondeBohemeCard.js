import React from "react"
import { useState } from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"

import BlondeBohemePic from "../../assets/BlondeBoheme.png"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import YouTubeIcon from "@mui/icons-material/YouTube"
import JavaShop from "../../assets/JavaShop.png"

import GitHubIcon from "@mui/icons-material/GitHub"
import CodeIcon from "@mui/icons-material/Code"
import Box from "@mui/material/Box"

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

function MemesCard() {
  const [expanded, setExpanded] = useState(false)
  const [dense, setDense] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <div>
      <Card sx={{ width: "75vw", padding: "10px" }}>
        <CardHeader
          title="The Blonde Boheme"
          subheader="Full Stack Application"
        />
        <Typography variant="caption">
          Freelance full stack web app for a local hair salon, including new
          client consultations, booking system and payment
          <br />
        </Typography>
        <CardMedia
          component="img"
          height="auto"
          position="cover"
          image={BlondeBohemePic}
          alt="Java Shop"
          borderRadius="10"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Technologies:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            JavaScript React | Mui | Ruby on Rails |PostgreSQL | Active Storage
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {` `}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.loom.com/share/e40b922fc7fa40bcbefa8d4c7c409f3d"
              )
            }
            aria-label="youtube link"
          >
            <YouTubeIcon size="large" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://github.com/nccandiotti/BlondeBoheme")
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
            <Typography align="center" paragraph>
              Description
            </Typography>
            <Typography align="left">
              <ul>
                <li>
                  <Typography variant="caption" align="left">
                    Created a self generated, RESTful API using Rails and
                    PostgresSQL with image uploads via Active Storage
                  </Typography>
                </li>

                <li>
                  <Typography variant="caption" align="left">
                    Incorporated multiple user views (public, user, admin) for a
                    dynamic frontend user experience
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" align="left">
                    Achieved full CRUD methodology by integrating guest
                    consultation intake forms, payment, and a booking system
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" align="left">
                    Designed sleek and intuitive UI with JavaScript React, MUI,
                    and custom CSS
                  </Typography>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}

export default MemesCard
