import React , {useState} from 'react'
import { AppBar , Box , Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link , NavLink } from 'react-router-dom';
import '../Styles/Style.css';
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    //handel menu click
    const handelDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    // menu drawer
    const drawer = (
        <Box onClick={handelDrawerToggle} sx={{textAlign:'center'}}>
             <Typography 
                  color={'goldenrod'}
                  variant="h6" 
                  component="div"
                  sx={{flexGrow: 1}} 
            >
                <RestaurantMenuIcon />
                My Resturant
                </Typography>
                <Divider />
                    <ul className='mobile-navigation'>
                            <li>
                                <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/menu"}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>Contact</NavLink>
                            </li>
                         </ul>
                   </Box>
    )
  return (
    <>
       <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black"}}>
            <Toolbar>
                <IconButton 
                 color='inherit'
                 aria-label='open drawer' 
                 edge="start"
                 sx={{mr:2 , display: { sm: "none"}, }}
                 onClick={handelDrawerToggle}
            >
                    <MenuIcon />
                </IconButton>
            <Typography 
                  color={'goldenrod'}
                  variant="h6" 
                  component="div"
                  sx={{flexGrow: 1}} >
                <RestaurantMenuIcon />
                My Resturant
                </Typography>

                    <Box sx={{ display: {xs:'none', sm:'block'}}}>
                        <ul className='navigation-menu'>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/menu"}>Menu</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                          </ul>
                    </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
              <Drawer variant='temporary' 
              open={mobileOpen} 
              onClose={handelDrawerToggle}
              sx={{display:{xs:'block', sm:'none'}}}
              >
                 {drawer}
              </Drawer>
          </Box>
          <Box >
          <Toolbar />
          </Box>
         </Box> 
    </>
  )
}

export default Header;