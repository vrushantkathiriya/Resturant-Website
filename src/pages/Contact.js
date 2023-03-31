import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10 , ml:10 , "& h4":{fontWeight:'bold', mb:2 }}}>
          <Typography variant='h4'>Contact My Resturant </Typography>
          <p>Lorem ipsum dolor sit amet. In commodi optio nam dolore nisi At voluptatem delectus et amet
             nisi et dolorum odit. Ut quis impedit et voluptatem impedit sit rerum nisi ea quasi quis qui 
             eveniet iusto et recusandae sint.
            Qui tenetur nihil in voluptatum dolorem sit 
             vitae debitiset nulla voluptatibus qui fuga velit qui omnis doloribus.</p>
        </Box>
        <Box sx={{ m:3 , width:"600px" , ml:10}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: "black" , color:"white" , textAlign:"center"}}>Contact Details</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                    <SupportAgentIcon sx={{color:"red" , pt: 1 ,}} /> 1800-00-0000 (Toll Free)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <EmailIcon  sx={{color:"skyblue" , pt: 1 }}/>  feedback@my.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <AddIcCallIcon  sx={{color:"green" , pt: 1 }}/>  1234567890
                    </TableCell>
                  </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact;