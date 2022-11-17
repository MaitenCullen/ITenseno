import React from 'react'
import { CartAbout } from '../components/CartAbout'
import { CartButtons } from '../components/CartButtons'
import { CartData } from '../components/CartData'
import { CartHome } from '../components/CartHome'
import { CartImages } from '../components/CartImages'
import { SectionFind } from '../components/home/SectionFind'
import { SectionTechnologies } from '../components/home/SectionTechnologies'

export const Home = () => {
  return (
    <>
      <CartHome/>

    <CartButtons/>

    <CartData/>

    <CartImages/>

    <CartAbout/>

    <SectionTechnologies/>
    <SectionFind/>
    </>

  )
}
