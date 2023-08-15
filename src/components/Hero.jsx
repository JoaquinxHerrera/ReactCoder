import React from 'react'
import { useRef } from 'react';
import "./ItemListContainer/ItemListContainerStyle.css"
import ItemListContainer from './ItemListContainer/ItemListContainer';


function Hero() {
    const itemListRef = useRef(null);
    const scrollToItemList = () => {
        if (itemListRef.current) {
          itemListRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div>
        <div className='hero'>
          <div className='heroLeft'>
            <h1>UWEAR. Your favourite shoes in the same place.</h1>
            <h3>With Uwear we offer you the best sneakers of the market with the best prices.</h3>
            <button onClick={scrollToItemList}>Check out our shoes</button>
            <div className='arrowDiv'>
              <svg className="arrow"viewBox="0 0 24 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9393 166.061C11.5251 166.646 12.4749 166.646 13.0607 166.061L22.6066 156.515C23.1924 155.929 23.1924 154.979 22.6066 154.393C22.0208 153.808 21.0711 153.808 20.4853 154.393L12 162.879L3.51471 154.393C2.92893 153.808 1.97918 153.808 1.39339 154.393C0.807605 154.979 0.807605 155.929 1.39339 156.515L10.9393 166.061ZM10.5 -6.55671e-08L10.5 165L13.5 165L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="black"/>
              </svg>
            </div>
            
          </div>
          <div className='heroRight'>
            <img src="https://i.ibb.co/0KksrGF/unsplash-0-a-Ahxo-XOSo.png" alt="" />
          </div>
        </div>
        <div ref={itemListRef}>
            <h1 className="ourProducts">Our products</h1>
            <ItemListContainer />
        </div>
    </div>
    
  )
}

export default Hero