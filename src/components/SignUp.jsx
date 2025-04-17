import { Box, Button, List, ListItem, ListItemText, TextField } from '@mui/material'
import React, { useState } from 'react'
import useCustomForm from './useCustomForm';



const SignUp = () => {
    const [customForm, setCustomForm] = useCustomForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        const {password, repeatPassword} = customForm;
        if (password === repeatPassword) {
            console.log(JSON.stringify(customForm));
        } else {
            alert("Passwords don't match!");
        }
        
    }
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
        <form onSubmit={handleSubmit}>
            <List className='inputs'>
                <ListItem>
                    <TextField id="firstName" label="First name" variant="outlined" 
                    onChange={(e) => setCustomForm(input => ({
                        ...input,
                        firstName: e.target.value
                    }))}
                    />
                </ListItem>
                <ListItem>
                    <TextField id="lastName" label="Last name" variant="outlined" 
                    onChange={(e) => setCustomForm(input => ({
                        ...input,
                        lastName: e.target.value
                    }))}
                    />
                </ListItem>
                <ListItem>
                    <TextField id="email" label="Email" variant="outlined" type='email'
                    onChange={(e) => setCustomForm(input => ({
                        ...input,
                        email: e.target.value
                    }))}
                    />
                </ListItem>
                <ListItem>
                    <TextField id="phoneNumber" label="Phone number" variant="outlined" type='tel'
                    onChange={(e) => setCustomForm(input => ({
                        ...input,
                        phoneNumber: e.target.value
                    }))}
                    />
                </ListItem>
                <ListItem>
                    <TextField id="password" label="Password" variant="outlined" type='password'
                    onChange={(e) => setCustomForm(input => ({
                        ...input,
                        password: e.target.value
                    }))}
                    />
                </ListItem>
                <ListItem>
                    <TextField id="repeatPassword" label="Confirm password" variant="outlined" type='password'
                    onChange={(e) => setCustomForm(input => ({
                        ...input,
                        repeatPassword: e.target.value
                    }))}
                    />
                </ListItem>
            </List>
            <Button variant="contained" type='submit'>Create account</Button>
        </form>
        <h3>Already have an account? <a href="https://github.com/wildfireOfMine" target='_blank'>Log in</a></h3>
    </Box>
  )
}

export default SignUp
