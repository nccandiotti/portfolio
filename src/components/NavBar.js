import * as React from "react"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"

//ICONS
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import CreateIcon from "@mui/icons-material/Create"
//for medium link
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

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
        <Button startIcon={<LinkedInIcon size="large" />}></Button>
        <LinkedInIcon href="https://www.linkedin.com/in/nicole-candiotti/" />
      </Breadcrumbs>
    </div>
  )
}
