import React from 'react'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import Slideshow from '../../components/Slideshow'
import Best from '../../components/BestSeller'
import Box from '../../components/BoxCta'
import New from '../../components/NewRelease'
import Block from '../../components/BlockHome'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <Layout>
      <MenuHeader />
      <Slideshow />
      <Best />
      <Box />
      <New />
      <Block />
    </Layout>
  )

}

export default HomePage