import React from 'react'
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
  return (
    <StoreContainer>
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
              <StoreContent></StoreContent>
    </StoreContainer>
  )
}
