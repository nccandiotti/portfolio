import { Route, Routes } from "react-router-dom"

// Components
import NavBar from "./components/NavBar"
import About from "./components/About"
import Projects from "./components/Projects"

//ICONS
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import CreateIcon from "@mui/icons-material/Create"
//for medium link
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

// MUI Components
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import "./App.css"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import InteractiveList from "./list"

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

function App() {
  return (
    <>
      {" "}
      <InteractiveList />
      <Container
        sx={{ backgroundColor: "#272822" }}
        align="center"
        justifyContent="center"
      >
        <Box
          padding="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            theme={theme}
            color="#fff"
            variant="h1"
          >{`< Nicole Candiotti >`}</Typography>
        </Box>
        <NavBar />

        <Typography color="#66D9EF" theme={theme}>
          {" "}
          Software Engineer | Speech-Language Pathologist | Linguist
        </Typography>

        <Typography color="#fff" theme={theme}>
          {" "}
          hi
        </Typography>
        <About />
        {/* <Routes></Routes> */}
        <Projects />
      </Container>
    </>
  )
}

export default App
