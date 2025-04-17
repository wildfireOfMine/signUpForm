import { Box, Button, List, ListItem, ListItemText, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <Box 
        sx={{
            backgroundColor: 'rgb(219, 219, 219)',
        }}
        className='signUp'
    >
        <h1>Welcome!</h1>
        <h2>This is a test sign up form done in React MUI. HTML + CSS + JavaScript. This is part of a The Odin Project task.</h2>
        <h3>Feeling curious about other works done by myself? <a href="https://my-odin-path.vercel.app/" target='_blank'>Click here!</a></h3>
        <List className='inputs'>
            <ListItem>
                <TextField className="firstName" id="outlined-basic" label="First name" variant="outlined" />
            </ListItem>
            <ListItem>
                <TextField id="outlined-basic" label="Last name" variant="outlined" />
            </ListItem>
            <ListItem>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </ListItem>
            <ListItem>
                <TextField id="outlined-basic" label="Phone number" variant="outlined" />
            </ListItem>
            <ListItem>
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </ListItem>
            <ListItem>
                <TextField id="outlined-basic" label="Confirm password" variant="outlined" />
            </ListItem>
        </List>
        <Button variant="contained">Create account</Button>
        <h3>Already have an account? <a href="https://github.com/wildfireOfMine" target='_blank'>Log in</a></h3>
    </Box>
  )
}

export default SignUp
