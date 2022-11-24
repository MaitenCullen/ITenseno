import React from 'react'

import { CartHome } from '../components/CartHome'
import { CartImages } from '../components/CartImages'
import { SectionFind } from '../components/home/SectionFind'
import { SectionTechnologies } from '../components/home/SectionTechnologies'
import AboutUs from '../components/AboutUs'

export const Home = () => {
  return (
    <>
      <CartHome/>
      <SectionTechnologies/>
      <SectionFind/>

      <CartImages/>


      <AboutUs/>
    </>

  )
}
