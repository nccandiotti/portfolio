import { useState, useRef } from "react"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import IconButton from "@mui/material/IconButton"

export default function Footer() {
  return (
    <Box sx={{ width: "100vw" }}>
      <BottomNavigation>
        {/* <IconButton>
          <a href="mailto:nccandiotti@gmail.com">
            {" "}
            {<EmailOutlinedIcon size="large"></EmailOutlinedIcon>}
          </a>
        </IconButton> */}
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="Back to Top"
          icon={
            <ArrowUpwardIcon
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          }
        />
      </BottomNavigation>
    </Box>
  )
}
