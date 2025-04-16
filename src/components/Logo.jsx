import { Box, Typography } from '@mui/material'
import React from 'react'
import Odin from "../../public/img/Odin.png"
import Norse from "../../public/fonts/Norse-Bold.otf"
import "../App.css";

const Logo = () => {
  return (
    <Box className="logo"
    sx={{
      width: '100%',
      height: '30vh',
    }}>
        <img src={Odin} height={200}/>
        <Typography variant='h1' className="norseLogo">Odin</Typography>
    </Box>
  )
}

export default Logo
