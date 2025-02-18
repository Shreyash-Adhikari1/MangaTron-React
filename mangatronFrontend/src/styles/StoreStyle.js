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
   height: 100px;
   width: 203vh;
   background-color: #222327; /* Darker shade for contrast */
`;

export const NavItemsFrame = styled.div`
   display: grid;
   grid-template-columns: repeat(3, auto);
   gap: 50px;
   align-items: center;
   margin-left: 20px;
`;

export const NavFrameRight = styled.div`
   display: grid;
   grid-template-columns: repeat(3, auto);
   gap: 50px;
   align-items: center;
   margin-right: 10px;
`;

// Navigation Items with Hover & Click Effects
export const NavItems = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5; /* Light gray for better readability */
   text-align: center;
   cursor: pointer;
   transition: color 0.3s ease-in-out;

   &:hover {
      color: #ffcc00; /* Gold color on hover */
   }

   &:active {
      color: #ffcc00;
   }
   
  &:hover {
    transform: scale(1.09);
  }
`;

// Store Layout
export const StoreContent = styled.div`
  display: flex;
  flex-grow: 1;
  width: 203vh;
  background-color: #393a3f;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;

// Sidebar
export const Sidebar = styled.div`
  width: 200px;
  background-color: #2b2c30;
  padding: 20px;
  border-radius: 10px;
  flex-shrink: 0; /* Prevent sidebar from shrinking */
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
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

// Product Grid
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  flex-grow: 1;
  padding-left: 20px;
  min-width: 0;
`;

// Product Cards
export const ProductCard = styled.div`
  background-color: #2b2c30;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;
  height: 250px; /* Reduced height */

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 140px; /* Adjusted to maintain a balanced look */
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

