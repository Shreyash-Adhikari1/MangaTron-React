import styled from 'styled-components';

export const MainContainer = styled.div`
   display: flex;
   height: 100vh;
   width: 203vh;
   flex-direction: column;
   overflow:hidden
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

// Content Section
export const ContentFrame = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   background-color: #393a3f;
   height:100%
`;

export const LatestFrame = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #393a3f;
   margin-top: 10px;
   height:100%;
   width:100%
`;

export const LatestIndicate = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5; /* Light gray */
   margin-top: 10px;
   margin-left: 20px;
`;

export const LatestContent = styled.div`
   display: grid;
   grid-template-columns: repeat(10, 1fr); 
   gap: 10px; 
   width: 100%;
   background-color: #393a3f;
   margin-top: 10px;
   padding: 10px;
   justify-content: center;
`;


export const LatestItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   max-width: 150px; /* Prevents items from stretching */
   margin: 0 auto;

   &:hover {
      transform: scale(1.05);
   }
`;


export const LatestImage = styled.img`
   width: 120px;
   height: 180px;
   border-radius: 5px;
   object-fit: cover;
`;

export const LatestName = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #d1d1d1; /* Soft gray for a balanced look */
   margin-top: 5px;
   text-align: center;
`;


export const LatestWebViewContainer = styled.div`
   width: 100%;
   height: 600px;
   overflow: hidden;
   position: relative;
`;

export const LatestWebViewIframe = styled.iframe`
   width: 100%;
   height: 1530px;
   border: none;
   position: relative;
   top: -200px;
   margin-bottom: -800px;
`;

export const LatestBackButton = styled.button`
   margin-bottom: 10px;
   padding: 8px 16px;
   border-radius: 8px;
   border: none;
   background-color: #ff4d4d;
   color: white;
   cursor: pointer;
`;
