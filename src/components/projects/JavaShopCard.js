import React from "react"
import { useState } from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"

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
    <div style={{ boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" }}>
      <Card sx={{ maxWidth: 345, padding: "10px" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="JavaShop"
          subheader="JavaScript"
        />
        <Typography variant="caption">
          A modern coffee shop landing page
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={JavaShop}
          alt="Java Shop"
          borderRadius="10"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Technologies:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            JavaScript | CSS | HTML | JSON Server
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {` `}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => window.open("https://youtu.be/NT9CAkm643w")}
            aria-label="youtube link"
          >
            <YouTubeIcon size="large" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://github.com/nccandiotti/JavaScript-Dom-Manipulation-Project"
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
            <Typography align="center" paragraph>
              Description
            </Typography>
            <Typography align="left">
              <ul>
                <li>
                  <Typography variant="caption" align="left">
                    Designed custom modal forms and an interactive shopping cart
                    for a realistic shopping experience
                  </Typography>
                </li>

                <li>
                  <Typography variant="caption" align="left">
                    Leveraged vanilla JavaScript and CSS to achieve DOM
                    manipulation{" "}
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" align="left">
                    Utilized JSON server to persist post and delete requests{" "}
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
