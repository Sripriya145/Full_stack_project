import React from 'react'
import frontpic from '../Picture/Happy birthday-rafiki.png'
import searchicon from '../Picture/magnifying-glass.png'
import '../Assert/SearchSection.css';
const SearchSection = () => {
  return (
   
      <div className="home-section">
        <div className="home-content">
        <div className='home-section-left'>
              <h2 className="home-title">Create <span className='title-highlight'>Unforgettable</span> Celebrations with Ease</h2>
              <div className='home-centent'>Welcome to our Birthday Event Organization platform! Planning the perfect birthday party can be stressful,
                 but with our comprehensive and user-friendly solution, it doesn't have to be. Our platform is 
                designed to help you organize, manage, and execute a memorable birthday event with ease.</div>
                <div className='search-bar'>
                <input type="text" />
                <img  className ="search-icon"src={searchicon} alt="searchbar" />
                </div>
        </div>
        <div className="home-section-right">
            <img  className="home-profile" src={frontpic} alt="profile" />
        </div>
        </div>
      </div>
  

  )
}

export default SearchSection