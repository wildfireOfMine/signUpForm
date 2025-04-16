import { Box, Button, List, ListItem, ListItemText, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <Box>
        <h1>Welcome!</h1>
        <List>
            <ListItem>
                <TextField id="outlined-basic" label="First name" variant="outlined" />
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
            <Button variant="contained">Create account</Button>
        </List>
        <h3>Already have an account? <a href="#">Log in</a></h3>
        
    </Box>
  )
}

export default SignUp
