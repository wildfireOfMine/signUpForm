import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import SignUp from './components/SignUp'
import Logo from './components/Logo'
import Copy from './components/Copy'
import Background from "./img/unsplash.jpg"

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
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <h3 className='information'>Picture by <a href="https://unsplash.com/es/@lin_cheng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cheng 
        Lin</a> in <a href="https://unsplash.com/es/fotos/el-gran-canal-y-la-basilica-de-santa-maria-della-salva-BJmFkjQFq44?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></h3>

        <a href="https://www.theodinproject.com/"><Logo/></a>
      
      </Drawer>
      <Drawer className='sidebarRight'
      sx={{
          width: '65%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '65%',
            boxSizing: 'border-box',
            borderLeft: '0 !important',
          },
        }}
        variant="permanent"
        anchor="right"
        >
        <SignUp/>
        <Copy/>
      </Drawer>

    </>
  )
}

export default SPA
