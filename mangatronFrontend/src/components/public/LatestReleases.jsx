import React from 'react'
import { 
    LatestContainer,
    NavFrame,
    NavFrameRight,
    NavItemsFrame,
    NavItems
 } from '../../styles/LatestReleasesStyle'
 import { Link } from 'react-router-dom'

export default function LatestReleases() {
  return (
    <LatestContainer>
         {/* Navigation Pane */}
      <NavFrame>
        <NavItemsFrame>
            <Link to='/home'> <NavItems>Home</NavItems>  </Link>
          
            <Link to='/latest'> <NavItems>Latest Releases</NavItems> </Link>

            <Link to='/genre'> <NavItems>Genres</NavItems> </Link>
        </NavItemsFrame>

        
        <NavFrameRight>
          <Link to='/store'> <NavItems>Store</NavItems> </Link>
          <Link to='/favourites'> <NavItems>Favourites</NavItems> </Link>
          <NavItems>User</NavItems>
        </NavFrameRight>
      </NavFrame>
    </LatestContainer>
  )
}
