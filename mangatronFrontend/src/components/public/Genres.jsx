import React from 'react'
import { 
    GenreContainer,
    NavFrame,
    NavItemsFrame,
    NavFrameRight,
    NavItems
 } from '../../styles/GenreStyles'
 import { Link } from 'react-router-dom'
export default function Genres() {
  return (
    <GenreContainer>
        {/* Navigation Pane */}
      <NavFrame>
        <NavItemsFrame>
          <Link to='/home'> <NavItems>Home</NavItems>  </Link>
          
          <Link to='/latest'> <NavItems>Latest Releases</NavItems> </Link>

          <Link to='/genre'> <NavItems>Genres</NavItems> </Link>
        </NavItemsFrame>


        <NavFrameRight>
          <Link to='/store'> <NavItems>Store</NavItems> </Link>
          
          <NavItems>About</NavItems>
          <NavItems>User</NavItems>
        </NavFrameRight>
      </NavFrame>
    </GenreContainer>
  )
}
