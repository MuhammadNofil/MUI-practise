import styled from '@emotion/styled'
import { Typography,AppBar , Toolbar,Box,Input,Badge,Avatar,Menu,MenuItem} from '@mui/material'
// import { borderRadius, width } from '@mui/system';
import React,{useState} from 'react'
import {Abc,Mail,Notifications} from '@mui/icons-material';
const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})
const Search=styled('div')(({theme})=>({
  backgroundColor:"white",
  padding:"0px 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",  
}))
const Icons=styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"

  }   
}))
const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center", 
  [theme.breakpoints.up("sm")]:{
    display:"none"

  }  
}))
const Navbar = () => {
  const [open,setopen]=useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{
          display:{
            xs:"none",
            sm:"block"
          }
      }}>
          Company name
        </Typography>
        <Abc sx={{
          display:{
            xs:"block",
            sm:"none"
          }

      }}/>
      <Search><Input placeholder='search'/></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
        <Mail  />
        </Badge>
    
        <Badge badgeContent={4} color="error">
        <Notifications />
        </Badge>
        <Avatar sx={{width:30,height:30}} onClick={e=>setopen(true)}/>
    </Icons>
    <UserBox onClick={e=>setopen(true)}>
    <Avatar  sx={{width:30,height:30}} />
    <Typography variant='span'>Nofil</Typography>
    </UserBox >
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar> 
    </AppBar>
  )
}

export default Navbar
