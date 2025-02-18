import styled from "styled-components";

export const FavouriteContainer=styled.div`
    display: flex;
    height: 100vh;
    width: 203vh;
    flex-direction: column;
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
export const NavItemsFrame = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
`;

export const NavFrameRight = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
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