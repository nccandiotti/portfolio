import * as React from "react"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"

//ICONS
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import CreateIcon from "@mui/icons-material/Create"
import ArticleIcon from "@mui/icons-material/Article"

//for medium link
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

const mediumIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48"
    height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"
  >
    <g transform="">
      <g
        fill="none"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
      >
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <path
          d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
          fill="#ffffff"
        ></path>
        <g fill="#ffffff">
          <circle
            cx="27.89474"
            cy="37.89474"
            transform="scale(2.26944,2.26944)"
            r="12"
          ></circle>
          <ellipse
            cx="47.89474"
            cy="37.89474"
            transform="scale(2.26944,2.26944)"
            rx="6"
            ry="11"
          ></ellipse>
          <ellipse
            cx="57.89474"
            cy="37.89474"
            transform="scale(2.26944,2.26944)"
            rx="2"
            ry="10"
          ></ellipse>
        </g>
        <path d="" fill="none"></path>
        <path
          d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
          fill="none"
        ></path>
        <path
          d="M86,168.56c-45.59663,0 -82.56,-36.96337 -82.56,-82.56v0c0,-45.59663 36.96337,-82.56 82.56,-82.56v0c45.59663,0 82.56,36.96337 82.56,82.56v0c0,45.59663 -36.96337,82.56 -82.56,82.56z"
          fill="none"
        ></path>
      </g>
    </g>
  </svg>
)

function handleClick(event) {
  event.preventDefault()
}

export default function NavBar() {
  return (
    <div
      style={{ alignItems: "center" }}
      role="presentation"
      onClick={handleClick}
    >
      <Breadcrumbs color="#66D9EF" separator="|" aria-label="breadcrumb">
        <Link color="#fff" underline="hover" href="/">
          Projects
        </Link>
        <Link
          color="#fff"
          underline="hover"
          href="/getting-started/installation/"
        >
          Resume
        </Link>
        <Link color="#fff" underline="hover">
          Speech-Language Pathology
        </Link>
        <IconButton>
          {" "}
          <GitHubIcon
            fontSize="large"
            sx={{ color: " #F92672 " }}
            onClick={() => window.open("https://github.com/nccandiotti")}
          />
        </IconButton>
        <Link
          sx={{ textdecoration: "none", color: " #F92672 " }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/nicole-candiotti/")
          }
        >
          Linkedin
        </Link>
        {/* <IconButton>
          {" "}
          <LinkedInIcon
            fontSize="large"
            sx={{ color: " #F92672 " }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/nicole-candiotti/")
            }
          />
        </IconButton> */}

        <IconButton>
          {" "}
          <ArticleIcon
            fontSize="large"
            sx={{ color: " #F92672 " }}
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/e/2PACX-1vTRY-rmanVup30jUNX84g-WWcCXzEcplj01SO_USqz47DeS3HGIOhCRG4jtztMg0rAW-fUWIXj-GNtq/pub"
              )
            }
          />
        </IconButton>
      </Breadcrumbs>
    </div>
  )
}
