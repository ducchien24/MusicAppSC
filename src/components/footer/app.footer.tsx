'use client'
import AppBar from '@mui/material/AppBar'
import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import {useHasMounted} from '@/utils/customHook'
import Container from '@mui/material/Container';
const AppFooter = () => {
    const isClient = useHasMounted()
    if(!isClient) return (<></>)
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background:'#f2f2f2'}}>
       <Container style={{display:'flex',gap:15}}>
         <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          volume={0.5}
          style={{
            boxShadow:'unset',
            background:'#f2f2f2'
          }}
          // Try other props!
        />
        <div
        style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'start',
            minWidth:150,
            justifyContent:'center',
        }}
        >
            <div style={{color:'#ccc'}}>Chien</div>
            <div style={{color:'black'}}> Web Developer</div>

        </div>

        </Container> 
   </AppBar>
  )
}

export default AppFooter