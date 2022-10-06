import { Box,List,ListItem,ListItemIcon,ListItemButton,ListItemText, Switch } from '@mui/material'
import {Home,Pages,People,MapsHomeWork,PersonOutline,Settings,ModeNight } from '@mui/icons-material';
import React from 'react'
const Sidebar = ({mode , setmode}) => {
  return (
    <>
    <Box  flex={1} sx={{
        display:{
            xs:"none",
            sm:"block",
        }
    }}>
        <Box position="fixed">
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <People/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MapsHomeWork/>
              </ListItemIcon>
              <ListItemText primary="Marketplaces" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PersonOutline/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setmode(mode === "light"? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          
          
    </List>
    </Box>
    </Box>

    </>
  )
}

export default Sidebar
