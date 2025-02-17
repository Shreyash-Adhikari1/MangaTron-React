import React from 'react'
import { 
    FavouriteContainer,
    NavFrame,
    NavItemsFrame,
    NavFrameRight,
    NavItems 
    } from '../../styles/FavouriteStyles'

import { Link } from 'react-router-dom'

export default function Favourites() {
  return (
    <FavouriteContainer>
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
        
    </FavouriteContainer>
  )
}
