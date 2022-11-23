import React from 'react'
import  AboutUs  from '../components/AboutUs'
import { CartButtons } from '../components'
import { CartData } from '../components'
import { CartHome } from '../components'
import { CartImages } from '../components'
import { SectionFind } from '../components/home'
import { SectionTechnologies } from '../components/home'

export const Home = () => {
  return (
    <>
      <CartHome/>

    <CartButtons/>

    <CartData/>

    <CartImages/>

    <AboutUs/>

    <SectionTechnologies/>
    <SectionFind/>
    </>

  )
}
