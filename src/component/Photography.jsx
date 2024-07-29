import React from 'react'
import '../Assert/Photography.css'
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('../Picture/Photography', false, /\.(png|jpe?g|svg)$/));

const photography=[
    
    'photography4.jpeg',
    'photography5.jpeg',
    'photography6.jpeg',
    'photography7.jpeg',
    'photography8.jpeg',
    'photography9.jpeg',
    'photography10.jpeg',
    'photography11.jpeg',
    
]
const Photography = () => {
  return (
    <div className='photography-section'>
        <h2 className="photography-title">Photography</h2>
        <div className="photography-content">
        {photography.map((image, index) => (
        <div key={index} className="photography-item">
          <img className='photography-pic' src={images[image]} alt={`Theme ${index + 1}`} />
          <div className='photography-eachtitle'>
           Candid clicx photography
          </div>
          <div className='photography-prices'>
            <p className='photography-repuess'>Rs. 9,999.00 <span className='old-price'>Rs. 11,999.00</span></p>
            <a  href="" className='photography-addtocard'>
              <i className="fas fa-cart-plus"></i>
              </a>
          </div>
          </div>
      ))}
        </div>
    </div>
  )
}

export default Photography