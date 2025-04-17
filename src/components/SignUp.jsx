import { Box, Button, List, ListItem, ListItemText, TextField } from '@mui/material'
import React from 'react'

const Submit = (e) => {
    e.preventDefault();
    console.log("Loco");
}

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
        <form onSubmit={Submit}>
            <List className='inputs'>
                <ListItem>
                    <TextField className="firstName" id="outlined-basic" label="First name" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="outlined-basic" label="Last name" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type='email'/>
                </ListItem>
                <ListItem>
                    <TextField id="outlined-basic" label="Phone number" variant="outlined" type='tel'/>
                </ListItem>
                <ListItem>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password'/>
                </ListItem>
                <ListItem>
                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" type='password'/>
                </ListItem>
            </List>
            <Button variant="contained" type='submit'>Create account</Button>
        </form>
        <h3>Already have an account? <a href="https://github.com/wildfireOfMine" target='_blank'>Log in</a></h3>
    </Box>
  )
}

export default SignUp
