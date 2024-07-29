import React from 'react';
import '../Assert/ThemePage.css'
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../Picture/Theme', false, /\.(png|jpe?g|svg)$/));

const themeImages = [
  'theme1.jpeg',
  'theme2.jpeg',
  'theme3.jpeg',
  'theme4.jpeg',
  'theme5.jpg',
  'theme6.jpg',
  'theme7.jpg',
  'theme8.jpeg',
  // 'theme9.jpeg',
  // 'theme10.jpeg',
  // 'theme11.jpeg',
  // 'theme12.jpeg',
  // 'theme13.jpeg',
  // 'theme14.png',
  // 'theme15.jpeg',
  // 'theme16.jpeg',
  // 'theme17.jpeg',
  // 'theme18.jpeg',
  // 'theme19.jpeg',
];

const Themepage = () => {
  return (
    <div className="theme-section">
      <h2 className='theme-title'>Theme decoration</h2>
     <div className='theme-content'>
      {themeImages.map((image, index) => (
        <div key={index} className="theme-item">
          <img className='theme-pic' src={images[image]} alt={`Theme ${index + 1}`} />
          <div className='theme-producttitle'>
            Gold & White birthday backdrop decoration
          </div>
          <div className='theme-prices'>
            <p className='theme-repuess'>Rs. 4,999.00 <span className='old-price'>Rs. 6,999.00</span></p>
            <a  href="" className='theme-addtocard'>
              <i className="fas fa-cart-plus"></i>
              </a>
          </div>
          </div>
      ))}
      </div>
     </div>
  );
};

export default Themepage;





