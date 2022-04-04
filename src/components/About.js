import React from "react"
import Typography from "@mui/material/Typography"
import { spacing } from "@mui/system"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"

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

function About() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <ThemeProvider theme={theme}>
        <Typography align="left" variant="h3">
          <span style={{ color: "#66D9EF" }}>function </span>
          <span style={{ color: "#A6E22E" }}>AboutMe</span>
          <span style={{ color: "#E6DB74" }}> {`(`}</span>
          <span
            style={{ fontSize: "20px", fontStyle: "italic", color: " #FD971F" }}
          >
            {" "}
            {/* {`Software Engineer,   Speech-Language Pathologist,   Linguist`} */}
          </span>

          <span style={{ color: "#E6DB74" }}> {`) {`}</span>
        </Typography>

        <Typography sx={{ color: "#66D9EF", marginTop: "10px" }} theme={theme}>
          {" "}
          Software Engineer | Speech-Language Pathologist | Linguist
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Raleway", align: "left", margin: "10px 40px" }}
          // variant="paragraph"
          color="#fff"
          theme={theme}
          align="left"
        >
          Hello, I'm a Full Stack Developer who is passionate about creating
          sleek, high quality technology. With a background as a speech-language
          pathologist, I hope to contribute a unique perspective on accessibilty
          in technology. My toolkit currently includes JavaScript, React, Ruby,
          and Rails. I'm a continuous learner and next on my list are Python and
          React Native. My love for languages, problem solving, and teamwork
          have led me to find my purpose as a developer.
        </Typography>

        {/* closing function bracket */}
        <Typography variant="h3" align="left">
          <span style={{ color: "#E6DB74" }}> {`}`}</span>
        </Typography>
      </ThemeProvider>
    </div>
  )
}

export default About
