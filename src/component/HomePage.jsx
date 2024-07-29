import React from 'react'
import Categories from './Categories'
import Themepage from './Themepage'
import Footer from './Footer'
import SearchSection from './SerachSection'
import Photography from './Photography'
import Venue from './Venue'

const HomePage = () => {
  return (
    <div>
        <SearchSection/>
        <Categories/>
        <Themepage/>
        <Venue/>
        <Photography/>
        <Footer />
    </div>
  )
}

export default HomePage;