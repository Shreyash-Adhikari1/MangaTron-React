import React from "react";
import {
  StoreContainer,
  NavFrame,
  NavItemsFrame,
  NavFrameRight,
  NavItems,
  StoreContent,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  Sidebar,
  SidebarTitle,
  SidebarItem,
} from "../../styles/StoreStyle.js";
import { NavLink } from "react-router-dom";
import onepiece from '../../../public/assets/mangaImages/onePiece.png'

export default function Store() {
  const products = [
    { name: "One Piece Manga Vol.1", img: onepiece, price: "$10" },
    { name: "Naruto Hoodie", img:  onepiece, price: "$30" },
    { name: "Attack on Titan Keychain", img:  onepiece, price: "$5" },
    { name: "Jujutsu Kaisen Poster", img:  onepiece, price: "$12" },
    { name: "Demon Slayer Sword", img:  onepiece, price: "$50" },
  ];

  return (
    <StoreContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavItemsFrame>
          <NavLink to="/home"> <NavItems>Home</NavItems> </NavLink>
          <NavLink to="/latest"> <NavItems>Latest Releases</NavItems> </NavLink>
          <NavLink to="/genre"> <NavItems>Genres</NavItems> </NavLink>
        </NavItemsFrame>
        <NavFrameRight>
          <NavLink to="/store"> <NavItems>Store</NavItems> </NavLink>
          <NavLink to="/favourites"> <NavItems>Favourites</NavItems> </NavLink>
          <NavItems>User</NavItems>
        </NavFrameRight>
      </NavFrame>

      {/* Store Content */}
      <StoreContent>
        {/* Sidebar */}
        <Sidebar>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarItem>Manga</SidebarItem>
          <SidebarItem>Merchandise</SidebarItem>
          <SidebarItem>Figures</SidebarItem>
          <SidebarItem>Posters</SidebarItem>
        </Sidebar>

        {/* Product Grid */}
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </StoreContent>
    </StoreContainer>
  );
}
