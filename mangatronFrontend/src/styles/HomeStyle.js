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
   background-color:#a3a3a3
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
   background-color:red
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
   background-color: white;
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
