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
import GitHubIcon from "@mui/icons-material/GitHub"
import qom from "../../assets/QOM.png"

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
    <>
      <Card sx={{ maxWidth: 345, padding: "10px" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Queen of Memes"
          subheader="JavaScript React "
        />
        <Typography variant="caption">
          Custom caption memes with the imgflip library
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={qom}
          alt="Museum Mapper"
          border="1px solid"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Technologies:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            JavaScript React | Ruby on Rails | MUI | MapBox | SQLite3 | Bcrypt
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=9qAre5FtZfs")
            }
            aria-label="youtube link"
          >
            <YouTubeIcon size="large" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://github.com/nccandiotti/meme-app")
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
                    Designed frontend using React functional components, hooks,
                    and React Router Dom
                  </Typography>{" "}
                </li>
                <li>
                  <Typography variant="caption" align="left">
                    Utilized third party API and JSON server as endpoints for
                    CRUD methodology
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" align="left">
                    Applied custom CSS and styled components{" "}
                  </Typography>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default MemesCard
