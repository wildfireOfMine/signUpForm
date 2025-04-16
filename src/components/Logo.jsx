import { Box, Typography } from '@mui/material'
import React from 'react'
import Odin from "../../public/img/Odin.png"
import Norse from "../../public/fonts/Norse-Bold.otf"
import "../App.css";

const Logo = () => {
  return (
    <Box>
        <img src={Odin}/>
        <Typography variant='h1' className="norseLogo">Odin</Typography>
    </Box>
  )
}

export default Logo
