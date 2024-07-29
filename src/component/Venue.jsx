import React from 'react'
import '../Assert/Venue.css'
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('../Picture/venue', false, /\.(png|jpe?g|svg)$/));

const venue=[
    
    'venue17.jpeg',
    'venue10.jpeg',
    'venue14.jpeg',
    'venue4.jpeg',
    'venue5.jpeg',
    'venue15.jpeg',
    'venue7.jpeg',
    'venue11.jpeg',
    
]
const Venue = () => {
  return (
    <div className='venue-section'>
        <h2 className="venue-title">Venue</h2>
        <div className="venue-content">
        {venue.map((image, index) => (
        <div key={index} className="venue-item">
          <img className='venue-pic' src={images[image]} alt={`Theme ${index + 1}`} />
          <div className='venue-eachtitle'>
           Premium Venue hall
          </div>
          <div className='venue-prices'>
            <p className='venue-repuess'>Rs. 9,999.00 <span className='old-price'>Rs. 11,999.00</span></p>
            <a  href="" className='venue-addtocard'>
              <i className="fas fa-cart-plus"></i>
              </a>
          </div>
          </div>
      ))}
        </div>
    </div>
  )
}

export default Venue