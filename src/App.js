import { Route, Routes } from "react-router-dom"

// Components
import NavBar from "./components/NavBar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

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
          <Typography theme={theme} color="#fff" variant="h1">
            <span className="name">{`<`}</span>
            <span className="name">{`N`}</span>
            <span className="name">{`i`}</span>
            <span className="name">{`c`}</span>
            <span className="name">{`o`}</span>
            <span className="name">{`l`}</span>
            <span className="name">{`e`}</span>
            <span className="name">{` `}</span>
            <span className="name">{`C`}</span>
            <span className="name">{`a`}</span>
            <span className="name">{`n`}</span>
            <span className="name">{`d`}</span>
            <span className="name">{`i`}</span>
            <span className="name">{`o`}</span>
            <span className="name">{`t`}</span>
            <span className="name">{`t`}</span>
            <span className="name">{`i`}</span>
            <span className="name">{`>`}</span>
          </Typography>
        </Box>
        <NavBar />

        <About />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </>
  )
}

export default App
