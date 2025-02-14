import styled from 'styled-components';

export const MainContainer= styled.div`
   display: flex;
   height: 100vh;
   width: 203vh;
   
   flex-direction:column;
`;

export const NavFrame = styled.div`
   display: flex;
   height: 100px;
   width: 203vh;
   background-color:#393a3f;
`;

export const NavItemsFrame= styled.div`
   display: flex;
   height: 100px;
   width: 500px;
   gap: 50px; 
   align-items: center;
   padding: 0 20px; 
`;

export const NavFrameRight=styled.div`
   display: flex;
   height: 100px;
   width:300px;
   align-items: center;
   margin-left:700px;
   padding: 0 20px;
   gap:50px
`;

export const NavItems=styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: black;
`;

export const ContentFrame=styled.div`
   display:flex;
   flex-direction:column;
   height:800px;
   width:203vh;
   background-color:#393a3f
  //overflow-y: auto;
`;

export const TrendingFrame=styled.div`
   display:flex;
   flex-direction:column;
   background-color: #ffffff;
   margin-top:10px;
   height: 300px;
   width: 203vh;
   
`; 

export const TrendingIndicate=styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: black;
   margin-top:10px;
   margin-left: 20px;
`;

export const TrendingContent=styled.div`
   display:flex;
   height: 300px;
   width: 200vh;
   background-color: white;
   margin-top:0px;
   margin-left:10px
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
   color: black;
   margin-top: 5px;
   text-align: center;
`;

export const RecommendedFrame=styled.div`
   display:flex;
   flex-direction: column;
   height:340px;
   width:203 vh;
   background-color:white
`;

export const RecommendIndicate=styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: black;
   margin-top:10px;
   margin-left: 20px;
`;

export const RecommendContent=styled.div`
   display:flex;
   height: 300px;
   width: 200vh;
   margin-left:10px
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
   color: black;
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
  height: 1530px; /* Increasing height to have extra space*/
  border: none;
  position: relative;
  top: -200px; /* This is to move the webview content upwards */
  margin-bottom: -800px; /* This is to crop from the bottom */
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
