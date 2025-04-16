import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <Box>
        <h1>Welcome!</h1>
        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="Last name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone number" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField id="outlined-basic" label="Confirm password" variant="outlined" />
        <Button variant="contained">Create account</Button>
    </Box>
  )
}

export default SignUp
