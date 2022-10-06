import { Add as AddIcon,EmojiEmotions,Image,VideoCameraBack,PersonAdd, DateRange} from '@mui/icons-material';
import { Avatar, Box, Fab, Modal, TextField, Tooltip,Typography,Stack, ButtonGroup, Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

})
const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})
const Add = () => {
    const [open,setopen]=useState(false)
  return (
    <div>
      <Tooltip onClick={e=>setopen(true)} 
      title="Delete" sx={{position:"fixed" , bottom:20,
    left:{xs:"calc(50% - 25px)",md:30}
    }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    </Tooltip>
    <StyledModal
  open={open}
  onClose={e=>setopen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant='h6' color="gray" textAlign="center">Create a post</Typography>
    <UserBox>
        <Avatar sx={{width:30,height:30}}/>
        <Typography variant='span' fontWeight={500} >Nofil</Typography>

    </UserBox>
    <TextField
    sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="whats on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button 
  >Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
</ButtonGroup>
  </Box>
</StyledModal>
    </div>
  )
}

export default Add;