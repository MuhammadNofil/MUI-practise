import { Box, Stack } from '@mui/system';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Add from './components/Add';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
function App() {
  const [mode,setmode]=useState('light')
  const darktheme=createTheme({
    palette:{
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darktheme}>
    <Box className="App" bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setmode={setmode} mode={mode} />
      <Feed
      />
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
