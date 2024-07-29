import React from 'react'
import "../Assert/Categories.css"
import dinner from '../Picture/categories/cutting-board.png';
import dj from '../Picture/categories/hip-hop.png';
import cooking from '../Picture/categories/chef.png';
import dance from '../Picture/categories/dancing.png';
import theme from '../Picture/categories/birthday.png'
import photography from '../Picture/categories/photography.png';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <div>
      <div className="categories-section">
          <div className="categories-content">
            <h2 className='categories-title'>Categories</h2>
            <div className="categories-item">
              <Link className='categories-link' to={"/venue"}>
              <div className="each-categories-item">
                <img src={dinner} alt="dinner" />
                <p>Venue</p>
              </div>
              </Link>
              <Link className='categories-link' to={"/theme"}>
              <div className="each-categories-item">
                <img src={theme} alt="dinner" />
                <p>Theme Decoration</p>
              </div>
              </Link>
              <div className="each-categories-item">
                <img src={dj} alt="" />
                <p>DJ & Music</p>
              </div>
              <div className="each-categories-item">
                <img src={dance} alt="" />
                <p>Dance Party</p>
              </div>
              <div className="each-categories-item">
                <img src={photography} alt="" />
                <p>Photography</p>
              </div>
              <div className="each-categories-item">
                <img src={cooking} alt="" />
                <p>Menu & Food</p>
              </div>
            </div>
          </div>
      </div>
    </div>


  )
}

export default Categories