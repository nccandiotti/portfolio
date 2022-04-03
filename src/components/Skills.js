import React from "react"
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

let skills = [
  { languages: ["JavaScript", "Ruby", "SQL"] },
  { frameworks: ["React", "Rails"] },
  { libraries: "React, MUI, MapBox" },
  { tools: ["Git", "Postman"] },
]

function Skills() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Typography align="left" variant="h3">
        <span style={{ color: "#A6E22E" }}>let </span>
        <span style={{ color: "#fff" }}>skills </span>
        <span style={{ color: "#F92672 " }}>= </span>
        <span style={{ color: " #E6DB74" }}>{`[`}</span> <br />
        <Typography variant="h5" sx={{ color: "#fff" }}>
          {" "}
          <span style={{ color: " #AE81FF " }}>{`{`} </span>
          languages & databases:{" "}
          <span style={{ color: "#66D9EF" }}>
            [
            <span style={{ color: "#E6DB74" }}>
              {` JavaScript,  Ruby,  HTML,  CSS,  SQL,  PostgresSQL, SQLite3 `}
            </span>
            ]
          </span>
          <span style={{ color: " #AE81FF " }}>{` }`} </span>{" "}
          <span style={{ color: "#fff" }}>, </span>
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          {" "}
          <span style={{ color: " #AE81FF " }}>{`{`} </span>
          <span style={{ color: "#fff" }}>frameworks & libraries: </span>
          <span style={{ color: "#66D9EF" }}>
            [
            <span style={{ color: "#E6DB74" }}>
              {" "}
              {`React, Rails, Sinatra, MUI, MapBox, RESTful API's,  Active Record `}
            </span>
            ] <span style={{ color: " #AE81FF " }}>{`}`} </span>
          </span>
          <span style={{ color: "#fff" }}>, </span>
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          {" "}
          <span style={{ color: " #AE81FF " }}>{`{`} </span>
          <span style={{ color: "#fff" }}>tools: </span>
          <span style={{ color: "#66D9EF" }}>
            [
            <span style={{ color: "#E6DB74" }}>
              {` Git, NPM, Visual Studio Code, Postman, pair programming,
              test-driven programming `}
            </span>
            ]
          </span>
          <span style={{ color: " #AE81FF " }}>{` }`} </span>
          <br />
          <Typography
            variant="h3"
            style={{ color: " #E6DB74 " }}
          >{`]`}</Typography>
          <br />
        </Typography>
        {/* <span style={{ color: " #FD971F" }}>skills</span>
        <span style={{ color: "#F92672 " }}>skills</span>
        <span style={{ color: " #AE81FF " }}>let </span>
        <span style={{ color: "#E6DB74" }}> {`=`}</span> */}
      </Typography>
    </ThemeProvider>
  )
}

export default Skills
