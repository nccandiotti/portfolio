import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

import Typography from "@mui/material/Typography"
import CodeIcon from "@mui/icons-material/Code"

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false)

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Icon with text
      </Typography>

      <List dense={dense}>
        <ListItem sx={{ fontSize: "10px" }}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </Box>
  )
}
