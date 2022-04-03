import { useState } from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"

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
import CodeIcon from "@mui/icons-material/Code"
import Box from "@mui/material/Box"

import museummapper from "../assets/museummapper.png"
import qom from "../assets/QOM.png"
import JavaShop from "../assets/JavaShop.png"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

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

function Projects() {
  const [expanded, setExpanded] = useState(false)
  const [dense, setDense] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Grid container space={4}>
        <Grid item xs={3}>
          {/* // ---------------------- Museum Mapper ------------------------- */}
          <Card item xs={3} sx={{ maxWidth: 345, padding: "10px" }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Explore DC Museum Mapper"
              subheader="Full Stack Application"
            />
            <CardMedia
              component="img"
              height="194"
              image={museummapper}
              alt="Museum Mapper"
              border="1px solid"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Technologies:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                JavaScript React | Ruby on Rails | MUI | Stripe | MapBox |
                SQLite3 | Bcrypt
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=KuQ8JlcgEBU")
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
                <Typography align="center" paragraph>
                  Description
                </Typography>
                <Typography paragraph>
                  <Typography variant="caption" align="left">
                    Built Rails backend API using SQLite3 for data persistence
                    and BCrypt for authentication
                  </Typography>
                  <Typography variant="caption" align="left">
                    Followed RESTful conventions, applied MVC pattern, and built
                    CRUD functionality for resources
                  </Typography>
                  <Typography variant="caption" align="left">
                    Integrated third party data via MapBox and Stripe{" "}
                  </Typography>
                  <Typography variant="caption" align="left">
                    Designed sleek and intuitive UI with JavaScript React, MUI,
                    and custom CSS
                  </Typography>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {/* ---------------------- Queen of Memes ------------------------- */}
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345, padding: "10px" }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Queen of Memes"
              subheader="JavaScript React Application "
            />
            <Typography variant="caption">
              Custom Caption memes using the imgflip meme library
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
              <Typography variant="body2" color="text.secondary">
                JavaScript React | Ruby on Rails | MUI | MapBox | SQLite3 |
                Bcrypt
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

                <Typography align="center" variant="caption">
                  Designed frontend using React functional components, hooks,
                  and React Router Dom
                </Typography>
                <Typography align="center" variant="caption">
                  Utilized third party API and JSON server as endpoints for CRUD
                  methodology
                </Typography>
                <Typography align="center" variant="caption">
                  Applied custom CSS and styled components{" "}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {/* ---------------------- JavaShop ------------------------- */}
        <Grid item xs={3}>
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
              <Typography variant="body2" color="text.secondary">
                JavaScript | CSS | JSON Server
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
                <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                  <Typography
                    sx={{ mt: 4, mb: 2 }}
                    variant="h6"
                    component="div"
                  >
                    Icon with text
                  </Typography>

                  <List dense={dense}>
                    <ListItem sx={{ fontSize: "10px" }}>
                      <ListItemIcon>
                        <CodeIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Designed custom modal forms
                    and an interactive shopping cart for a realistic shopping
                    experience"
                      />
                      <ListItemText primary="Single-line item" />
                      <ListItemText
                        primary=" Leveraged vanilla JavaScript and CSS to achieve DOM
                    manipulation"
                      />
                      <ListItemText primary="Utilized JSON server to persist post and delete requests" />
                    </ListItem>
                  </List>
                </Box>

                <Typography align="center" paragraph>
                  Description
                </Typography>
                <Typography paragraph>
                  <Typography
                    sx={{ justifyContent: "center" }}
                    variant="caption"
                    align="left"
                  >
                    <CodeIcon fontSize="small" /> Designed custom modal forms
                    and an interactive shopping cart for a realistic shopping
                    experience
                  </Typography>

                  <Typography variant="caption" align="left">
                    Leveraged vanilla JavaScript and CSS to achieve DOM
                    manipulation
                  </Typography>
                  <Typography variant="caption" align="left">
                    Utilized JSON server to persist post and delete requests
                  </Typography>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Projects