import { Box } from '@mui/system'
import { Card, CardActionArea, CardMedia, MenuList } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const Menu = () => {
  return (
       <Layout>
            <Box>
               
               {/* MenuList.map(menu ={ */}
                    <Card>
                         <CardActionArea>
                              <CardMedia 
                                  SX={{ minHeight: "400px"}}
                                  component={"img"}
                                  src={'https://ychef.files.bbci.co.uk/live/624x351/p08v90pv.jpg'}
                                 
                                  alt={Menu.name}
                              />
                               <CardMedia 
                                  SX={{ minHeight: "400px"}}
                                  component={"img"}
                                  src={'https://c.ndtvimg.com/2022-06/m6sfhmto_mini-spicy-idlis_625x300_29_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350'}
                                 alt={Menu.name}
                              />
                         </CardActionArea>
                         <CardMedia 
                                  SX={{ minHeight: "400px"}}
                                  component={"img"}
                                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chole_bhature.jpg/1200px-Chole_bhature.jpg'}
                                 alt={Menu.name}
                              />
                         <CardMedia 
                                  SX={{ minHeight: "400px"}}
                                  component={"img"}
                                  src={'https://t4.ftcdn.net/jpg/03/45/64/29/360_F_345642976_fzD1FcOY69LghUbXNmyCRZPRSwRVDNlj.jpg'}
                                 alt={Menu.name}
                              />
                         <CardMedia 
                                  SX={{ minHeight: "400px"}}
                                  component={"img"}
                                  src={'https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/DP1.jpg'}
                                 alt={Menu.name}
                              />
                    </Card>
               {/* })  */}
            </Box>
       </Layout>
  )
}

export default Menu