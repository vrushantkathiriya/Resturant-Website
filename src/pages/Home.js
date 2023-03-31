import { Button } from '@mui/material';
import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import '../Styles/HomeStyle.css';


const Home = () => {
  return (
      <Layout>
          <div className='home' style={{backgroundImage: 'url("https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp")'}}>
            <div className='headerContainer'>
              <h1>Best Food WebSite</h1>
              <p style={{color:"#ffef2f"}}>Best Food In India</p>
              <Link to="/menu">
              <Button>
                ORDER NOW 
              </Button>
              </Link>
             

            </div>

          </div>
      </Layout>
  )
}

export default Home;