import styled from "styled-components";

export const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden; /* Prevents horizontal scrolling */
`;

// Navigation Bar
export const NavFrame = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100px; /* Ensure height remains the same */
   min-height: 100px; /* Prevent shrinking */
   width: 100vw;
   background-color: #222327;
   padding: 0 20px;
   box-sizing: border-box;
`;

export const NavTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f5f5f5;
  cursor: pointer;
`;

export const NavItemsFrame = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
   margin-right:60px
`;


export const NavItems = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5;
   text-align: center;
   cursor: pointer;
   transition: all 0.3s ease-in-out;

   &:hover {
      color: #ffcc00;
      transform: scale(1.09);
   }

   &:active {
      color: #ffcc00;
   }
`;

export const UserMenuContainer = styled.div`
   position: relative;
   display: inline-block;
`;

export const UserMenuDropdown = styled.div`
   position: absolute;
   top: 100%;
   left: 0;
   background-color: #333;
   border-radius: 5px;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   padding: 10px 0;
   min-width: 120px;
   z-index: 1000;
`;

export const UserMenuItem = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   color: white;
   padding: 10px 20px;
   cursor: pointer;
   transition: background 0.3s ease-in-out;

   &:hover {
      background-color: #ffcc00;
   }
`;


export const StoreContent = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100vw;
  background-color: #393a3f;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden; /* Prevents scrolling of the entire layout */
`;

export const Sidebar = styled.div`
  width: 220px;
  background-color: #2b2c30;
  padding: 20px;
  border-radius: 10px;
  flex-shrink: 0; /* Prevents shrinking */
  height: 100%; /* Full height to stay fixed */
`;

export const SidebarTitle = styled.h3`
  font-size: 18px;
  color: #ffcc00;
  margin-bottom: 10px;
`;

export const SidebarItem = styled.p`
  font-size: 16px;
  color: #f5f5f5;
  cursor: pointer;
  margin: 10px 0;
  transition: all 0.3s;

  &:hover {
    color: #ffcc00;
    transform: scale(1.09);
  }

  /* Active category effect */
  &.active {
    color: #ffcc00;
    font-weight: bold;
    text-decoration: underline;
  }
`;


export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  flex-grow: 1;
  padding-left: 20px;
  min-width: 0;
  height: 100%; /* Ensures full height */
  overflow-y: auto; /* Enables scrolling within grid */

  /* Hide scrollbar for Chrome, Safari, and Edge */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE/Edge */
  -ms-overflow-style: none;
`;
export const AllProductGrid= styled(ProductGrid)`
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const MangaGrid = styled(ProductGrid)`
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;


export const MerchandiseGrid = styled(ProductGrid)`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 18px;
`;


export const PostersGrid = styled(ProductGrid)`
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
`;


export const FiguresGrid = styled(ProductGrid)`
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
`;

export const ProductCard = styled.div`
  background-color: #2b2c30;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;
  height: 250px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ProductName = styled.h4`
  font-size: 16px;
  color: #f5f5f5;
  margin: 8px 0;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  color: #ffcc00;
  font-weight: bold;
`;
