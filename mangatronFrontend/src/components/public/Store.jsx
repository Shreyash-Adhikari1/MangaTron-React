import React, { useState } from "react";
import {
  StoreContainer,
  NavFrame,
  NavItemsFrame,
  NavFrameRight,
  NavItems,
  StoreContent,
  ProductGrid,
  MangaGrid,
  MerchandiseGrid,
  PostersGrid,
  FiguresGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  Sidebar,
  SidebarTitle,
  SidebarItem,
} from "../../styles/StoreStyle.js";
import { NavLink } from "react-router-dom";
import onepiece from "../../../public/assets/mangaImages/onePiece.png";

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    { name: "One Piece Manga Vol.1", img: onepiece, price: "$10" },
    { name: "Naruto Hoodie", img: onepiece, price: "$30" },
    { name: "Attack on Titan Keychain", img: onepiece, price: "$5" },
    { name: "Jujutsu Kaisen Poster", img: onepiece, price: "$12" },
    { name: "Demon Slayer Sword", img: onepiece, price: "$50" },
    { name: "One Piece Manga Vol.1", img: onepiece, price: "$10" },
    { name: "Attack on Titan Vol.5", img: onepiece, price: "$12" },
    { name: "Naruto Hoodie", img: onepiece, price: "$30" },
    { name: "One Piece Cap", img: onepiece, price: "$15" },
    { name: "Jujutsu Kaisen Poster", img: onepiece, price: "$12" },
    { name: "Demon Slayer Poster", img: onepiece, price: "$10" },
    { name: "Luffy Action Figure", img: onepiece, price: "$35" },
    { name: "Gojo Satoru Figure", img: onepiece, price: "$40" },
  ];

  const mangaProducts = [
    { name: "One Piece Manga Vol.1", img: onepiece, price: "$10" },
    { name: "Attack on Titan Vol.5", img: onepiece, price: "$12" },
  ];

  const merchandiseProducts = [
    { name: "Naruto Hoodie", img: onepiece, price: "$30" },
    { name: "One Piece Cap", img: onepiece, price: "$15" },
  ];

  const postersProducts = [
    { name: "Jujutsu Kaisen Poster", img: onepiece, price: "$12" },
    { name: "Demon Slayer Poster", img: onepiece, price: "$10" },
  ];

  const figuresProducts = [
    { name: "Luffy Action Figure", img: onepiece, price: "$35" },
    { name: "Gojo Satoru Figure", img: onepiece, price: "$40" },
  ];

  // Function to return the correct product grid
  const renderProducts = () => {
    switch (selectedCategory) {
      case "manga":
        return (
          <MangaGrid>
            {mangaProducts.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </MangaGrid>
        );
      case "merchandise":
        return (
          <MerchandiseGrid>
            {merchandiseProducts.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </MerchandiseGrid>
        );
      case "posters":
        return (
          <PostersGrid>
            {postersProducts.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </PostersGrid>
        );
      case "figures":
        return (
          <FiguresGrid>
            {figuresProducts.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </FiguresGrid>
        );
      default:
        return (
          <ProductGrid>
            {allProducts.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </ProductGrid>
        );
    }
  };

  return (
    <StoreContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavItemsFrame>
          <NavLink to="/home">
            <NavItems>Home</NavItems>
          </NavLink>
          <NavLink to="/latest">
            <NavItems>Latest Releases</NavItems>
          </NavLink>
          <NavLink to="/genre">
            <NavItems>Genres</NavItems>
          </NavLink>
        </NavItemsFrame>
        <NavFrameRight>
          <NavLink to="/store">
            <NavItems>Store</NavItems>
          </NavLink>
          <NavLink to="/favourites">
            <NavItems>Favourites</NavItems>
          </NavLink>
          <NavItems>User</NavItems>
        </NavFrameRight>
      </NavFrame>

      {/* Store Content */}
      <StoreContent>
        {/* Sidebar */}
        <Sidebar>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarItem className={selectedCategory === "all" ? "active" : ""} onClick={() => setSelectedCategory("all")}>
             All Products
          </SidebarItem>

          <SidebarItem className={selectedCategory === "manga" ? "active" : ""} onClick={() => setSelectedCategory("manga")}>
            Manga
          </SidebarItem>

          <SidebarItem className={selectedCategory === "merchandise" ? "active" : ""} onClick={() => setSelectedCategory("merchandise")}>
            Merchandise
          </SidebarItem>

          <SidebarItem  className={selectedCategory === "figures" ? "active" : ""} onClick={() => setSelectedCategory("figures")}>
            Figurines
          </SidebarItem>

          <SidebarItem className={selectedCategory === "posters" ? "active" : ""}  onClick={() => setSelectedCategory("posters")}>
            Posters
          </SidebarItem>
        </Sidebar>

        {/* Product Grid */}
        {renderProducts()}
      </StoreContent>
    </StoreContainer>
  );
}
