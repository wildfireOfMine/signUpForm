import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import SignUp from './components/SignUp'

const SPA = () => {
  return (
    <>
    <Drawer
        sx={{
          width: '35%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '35%',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
      </Drawer>
      <Drawer
      sx={{
          width: '65%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '65%',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
        >
        <SignUp/>
      </Drawer>

    </>
  )
}

export default SPA
