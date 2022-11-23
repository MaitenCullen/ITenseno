import React from 'react'
<<<<<<< HEAD
import  AboutUs  from '../components/AboutUs'
import { CartButtons } from '../components'
import { CartData } from '../components'
import { CartHome } from '../components'
import { CartImages } from '../components'
import { SectionFind } from '../components/home'
import { SectionTechnologies } from '../components/home'
=======
import { CartHome } from '../components/CartHome'
import { CartImages } from '../components/CartImages'
import { SectionFind } from '../components/home/SectionFind'
import { SectionTechnologies } from '../components/home/SectionTechnologies'
import AboutUs from '../components/AboutUs'
>>>>>>> 0e89b916cb319a2f5f2b1bbe7353ce86159e669b

export const Home = () => {
  return (
    <>
      <CartHome/>
      <SectionTechnologies/>
      <SectionFind/>

      <CartImages/>

<<<<<<< HEAD
    <CartData/>

    <CartImages/>

    <AboutUs/>

    <SectionTechnologies/>
    <SectionFind/>
=======
      <AboutUs/>
>>>>>>> 0e89b916cb319a2f5f2b1bbe7353ce86159e669b
    </>

  )
}
