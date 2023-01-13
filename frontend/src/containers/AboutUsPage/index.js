import React from 'react'
import "./about.css"
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import darwaza from "../../images/data/Darwaza.png"
import map from "../../images/data/Map.png"
import Box from "../../components/BoxCta";

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
  return(
    <Layout>
      <div className='aboutMain'>
        <div className='arow'>
          <div className='acol'>
            <div className='atextMain'>
              <div className='atext-1'>LETS GET TO KNOW</div>
              <div className='atext-11'>EACH OTHER</div>
              <p className='atext-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                omnis impedit in, sapiente, vitae molestias quo rem consectetur
                tenetur, qui porro nostrum laboriosam odit deleniti non harum
                fugiat consequuntur. Consectetur sapiente, vitae molestias quo rem
                consectetur tenetur, qui porro nostrum laboriosam odit deleniti
                non harum fugiat consequuntur sapiente, vitae molestias quo rem
                consectetur tenetur, qui porro nostrum laboriosam odit deleniti
                non harum fugiat consequuntur.
              </p>
              <div className='atext-3'>CEO: YALMAZ ALI</div>
              <div className='abtn-container'>
                <button className='abtn-explore'>EXPLORE</button>
              </div>
            </div>
          </div>
          <div className='acol'>
            <div className='aimgMain'>
              <img className='aimage-1' src={darwaza} alt='' />
            </div>
          </div>
        </div>
        <Box/>
        <div className='arow'>
          <div className='acol'>
            <img className='aimage-map' src={map} alt='' />
          </div>
          <div className='aform'>
            <Contact />
          </div>
        </div>
    </div>
    </Layout>
   )
 }

export default AboutUs