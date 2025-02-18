import styled from 'styled-components';

export const MainContainer = styled.div`
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
   color: ${(props) => (props.active ? "#ffcc00" : "#f5f5f5")}; /* Yellow if active */
   text-align: center;
   cursor: pointer;
   transition: color 0.3s ease-in-out;

   &:hover {
      color: #ffcc00; /* Gold color on hover */
   }
`;
// Content Section
export const ContentFrame = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   background-color: #393a3f;
`;

export const TrendingFrame = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #393a3f;
   margin-top: 10px;
   height: 300px;
   width: 203vh;
`;

export const TrendingIndicate = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5; /* Light gray */
   margin-top: 10px;
   margin-left: 20px;
`;

export const TrendingContent = styled.div`
   display: flex;
   height: 300px;
   width: 200vh;
   background-color: #393a3f;
   margin-top: 0px;
   margin-left: 10px;
`;

export const TrendingItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 150px;
`;

export const TrendingImage = styled.img`
   width: 120px;
   height: 180px;
   border-radius: 5px;
   object-fit: cover;
`;

export const TrendingName = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #d1d1d1; /* Soft gray for a balanced look */
   margin-top: 5px;
   text-align: center;
`;

export const RecommendedFrame = styled.div`
   display: flex;
   flex-direction: column;
   height: 340px;
   width: 203vh;
   background-color: #393a3f;
`;

export const RecommendIndicate = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5; /* Light gray */
   margin-top: 10px;
   margin-left: 20px;
`;

export const RecommendContent = styled.div`
   display: flex;
   height: 300px;
   width: 200vh;
   margin-left: 10px;
`;

export const RecommendItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 150px;
`;

export const RecommendImage = styled.img`
   width: 120px;
   height: 180px;
   border-radius: 5px;
   object-fit: cover;
`;

export const RecommendName = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #d1d1d1; /* Soft gray */
   margin-top: 5px;
   text-align: center;
`;

export const WebViewContainer = styled.div`
   width: 100%;
   height: 600px;
   overflow: hidden;
   position: relative;
`;

export const WebViewIframe = styled.iframe`
   width: 100%;
   height: 1530px;
   border: none;
   position: relative;
   top: -200px;
   margin-bottom: -800px;
`;

export const BackButton = styled.button`
   margin-bottom: 10px;
   padding: 8px 16px;
   border-radius: 8px;
   border: none;
   background-color: #ff4d4d;
   color: white;
   cursor: pointer;
`;
