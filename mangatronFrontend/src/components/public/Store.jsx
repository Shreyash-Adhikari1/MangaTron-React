import React, {useState} from 'react'
import {
    StoreContainer,
    NavFrame,
    NavItemsFrame,
    NavFrameRight,
    NavItems,
    StoreContent
}from '../../styles/StoreStyle.js'
import { Link } from 'react-router-dom'

export default function Store() {

   const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };

  return (
    <StoreContainer>
        <NavFrame>
                <NavItemsFrame>
                    <Link to='/home' onClick={() => handleClick(0)}> <NavItems active={activeIndex === 0}>Home</NavItems>  </Link>

                    <Link to='/latest' onClick={() => handleClick(1)}> <NavItems active={activeIndex === 1}>Latest Releases</NavItems> </Link>

                    <Link to='/genre' onClick={() => handleClick(2)}> <NavItems active={activeIndex === 2}>Genres</NavItems> </Link>
                </NavItemsFrame>

                <NavFrameRight>
                  <Link to='/store' onClick={() => handleClick(3)}> <NavItems active={activeIndex === 3}>Store</NavItems> </Link>

                  <Link to='/favourites' onClick={() => handleClick(4)}> <NavItems active={activeIndex === 4}>Favourites</NavItems> </Link>
                  
                  <NavItems>User</NavItems>
                </NavFrameRight>
              </NavFrame>
              <StoreContent></StoreContent>
    </StoreContainer>
  )
}
