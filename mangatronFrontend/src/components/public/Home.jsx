import React from 'react'
import { 
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavItems,
  TrendingFrame,
  TrendingIndicate,
  TrendingContent,
  TrendingItem,
  TrendingImage,
  TrendingName
 } from '../../styles/HomeStyle'
 
 import baskerville from "../../../public/assets/mangaImages/baskerville.jpg"
 import dandadan from '../../../public/assets/mangaImages/dandadan.jpg'
 import kagurabachi from '../../../public/assets/mangaImages/kagurabachi.jpg'
 import magicEmperor from '../../../public/assets/mangaImages/magicEmperor.jpg'
 import onePiece from'../../../public/assets/mangaImages/onePiece.png'
 import sakamotoDays from '../../../public/assets/mangaImages/sakamotoDays.jpg'



export default function Home() {

  const trendingItems = [
    { name: "One Piece", img: onePiece },
    { name: "Dandadan", img: dandadan },
    { name: "Sakamoto Days", img: sakamotoDays },
    { name: "Baskerville", img: baskerville},
    { name: "Magic Emperor", img: magicEmperor },
    { name: "Kagurabachi", img: kagurabachi }
  ];
  return (
    <MainContainer>
      {/* Navigation Pane */}
       <NavFrame>
        <NavItemsFrame>

        <NavItems>Home</NavItems>
        <NavItems>Latest Releases</NavItems>
        <NavItems>Genres</NavItems>
      
        </NavItemsFrame>
       </NavFrame>

       {/* Trending Pane */}
      <TrendingFrame>
        <TrendingIndicate>Trending</TrendingIndicate>

        <TrendingContent>
        {trendingItems.map((item, index) => (
            <TrendingItem key={index}>
              <TrendingImage src={item.img} alt={item.name} />
              <TrendingName>{item.name}</TrendingName>
            </TrendingItem>
          ))}

        </TrendingContent>

      </TrendingFrame>

    </MainContainer>
  )
}
