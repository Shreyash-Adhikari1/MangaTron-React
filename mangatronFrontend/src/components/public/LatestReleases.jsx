import React, {useState} from 'react'
import { 
    LatestContainer,
    NavFrame,
    NavFrameRight,
    NavItemsFrame,
    NavItems
 } from '../../styles/LatestReleasesStyle'
 import { Link } from 'react-router-dom'

export default function LatestReleases() {

   const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };

  return (
    <LatestContainer>
         {/* Navigation Pane */}
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
    </LatestContainer>
  )
}
