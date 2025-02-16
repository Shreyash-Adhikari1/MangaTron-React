import styled from "styled-components";
export const LatestContainer=styled.div`
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
`;