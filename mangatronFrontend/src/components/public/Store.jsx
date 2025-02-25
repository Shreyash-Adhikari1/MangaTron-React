import React, { useState, useEffect } from "react";
import {
  StoreContainer,
  NavFrame,
  NavItemsFrame,
  NavTitle,
  NavItems,
  UserMenuContainer,
  UserMenuDropdown,
  UserMenuItem,
  StoreContent,
  AllProductGrid,
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
import { Link } from "react-router-dom";
import { logout } from "../../apis/api.jsx";
import { getProducts,getProductsByCategory } from "../../apis/api.jsx";

export default function Store() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);

  // ✅ Map frontend category names to match your ENUM values in PostgreSQL
  const categoryMap = {
    all: "all",
    manga: "Manga",
    merchandise: "Merchandise",
    figures: "Figurines",
    posters: "Posters",
  };

  // ✅ Fetch products based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedCategory === "all") {
          const data = await getProducts();
          setProducts(data);
        } else {
          const data = await getProductsByCategory(categoryMap[selectedCategory]); // ✅ Use mapped category names
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // ✅ Filter products correctly
  const renderProducts = () => {
    if (products.length === 0) {
      return <p style={{ color: "white" }}>No products found.</p>;
    }

    const GridComponent = {
      all: AllProductGrid,
      Manga: MangaGrid,
      Merchandise: MerchandiseGrid,
      Posters: PostersGrid,
      Figures: FiguresGrid,
    }[categoryMap[selectedCategory]] || AllProductGrid;

    return (
      <GridComponent>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductCard>
        ))}
      </GridComponent>
    );
  };

  return (
    <StoreContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavTitle>Mangatron</NavTitle>
        <NavItemsFrame>
          <Link to="/home">
            <NavItems>Home</NavItems>
          </Link>
          <Link to="/latest">
            <NavItems>Latest Releases</NavItems>
          </Link>
          <Link to="/store">
            <NavItems>Store</NavItems>
          </Link>
          <UserMenuContainer
            onMouseEnter={() => setIsUserMenuOpen(true)}
            onMouseLeave={() => setIsUserMenuOpen(false)}
          >
            <NavItems>User</NavItems>
            {isUserMenuOpen && (
              <UserMenuDropdown>
                <UserMenuItem>Profile</UserMenuItem>
                <UserMenuItem onClick={() => logout()}>Logout</UserMenuItem>
              </UserMenuDropdown>
            )}
          </UserMenuContainer>
        </NavItemsFrame>
      </NavFrame>

      {/* Store Content */}
      <StoreContent>
        {/* Sidebar */}
        <Sidebar>
          <SidebarTitle>Categories</SidebarTitle>
          {["all", "manga", "merchandise", "figures", "posters"].map((category) => (
            <SidebarItem
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </SidebarItem>
          ))}
        </Sidebar>

        {/* Product Grid */}
        {renderProducts()}
      </StoreContent>
    </StoreContainer>
  );
}
