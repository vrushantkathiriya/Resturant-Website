import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const Footer = () => {
  return (
    <>
    <Box 
      sx={{textAlign:'center' , bgcolor:'#383232' , color:'white' , p: 3}}
    >
        <Box sx={{my:3, 
        " & svg" : {
             fontSize: "60px" ,
             cursor : " pointer" ,
             mr : 2, 

        } ,
        "& svg:hover": {
            color:'goldenrod',
            transform: 'translateX(5px)',
            transition:'all 400ms'
        }
        }}
    >
            {/* {icons} */}
            <InstagramIcon />
            <WhatsAppIcon />
            <TwitterIcon />
            <YouTubeIcon />
        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)": {
            fontsize: "1rem",
        }}}>
            All Rights Reserved &copy; Vrushant VK</Typography>
    </Box>
    </>
  )
}

export default Footer