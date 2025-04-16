import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import SignUp from './components/SignUp'

const SPA = () => {
  return (
    <>
    <Drawer
        sx={{
          width: '35%', // 20% del ancho
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '35%', // 20% del ancho
            boxSizing: 'border-box',
          },
        }}
        variant="permanent" // Sidebar fijo
        anchor="left"
      >
      </Drawer>
      <Drawer
      sx={{
          width: '65%', // 20% del ancho
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '65%', // 20% del ancho
            boxSizing: 'border-box',
          },
        }}
        variant="permanent" // Sidebar fijo
        anchor="right"
        >
        <SignUp/>
      </Drawer>

    </>
  )
}

export default SPA
