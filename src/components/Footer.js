import { useState, useRef } from "react"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontWeight: 400,
    fontFamily: "Raleway",
    color: "white",
  },
})

export default function Footer() {
  return (
    <>
      {" "}
      {
        <Typography
          sx={{
            color: "#fff",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
          theme={theme}
        >
          {`Theme Inspired by `}
          <span style={{ color: "#F92672 " }}>&nbsp;</span>
          <span style={{ color: "#F92672 " }}>M</span>
          <span style={{ color: "#66D9EF" }}>O</span>
          <span style={{ color: "#A6E22E" }}>N</span>
          <span style={{ color: " #FD971F" }}>O</span>
          <span style={{ color: " #AE81FF " }}>K</span>
          <span style={{ color: "#E6DB74" }}> A</span>
          <span style={{ color: "#F92672 " }}>I</span>
        </Typography>
      }
      <Box sx={{ backgroundColor: " #272822a7", width: "100vw" }}>
        <BottomNavigation sx={{ backgroundColor: " #464644" }}>
          {/* <IconButton>
          <a href="mailto:nccandiotti@gmail.com">
            {" "}
            {<EmailOutlinedIcon size="large"></EmailOutlinedIcon>}
          </a>
        </IconButton> */}
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
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
    </>
  )
}
