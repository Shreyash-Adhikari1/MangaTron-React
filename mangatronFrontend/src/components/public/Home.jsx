import React, { useState } from 'react';
import { 
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavFrameRight,
  NavItems,
  ContentFrame,
  TrendingFrame,
  TrendingIndicate,
  TrendingContent,
  TrendingItem,
  TrendingImage,
  TrendingName,
  RecommendedFrame,
  RecommendContent,
  RecommendIndicate,
  RecommendItem,
  RecommendName,
  RecommendImage
} from '../../styles/HomeStyle';

import baskerville from "../../../public/assets/mangaImages/baskerville.jpg";
import dandadan from '../../../public/assets/mangaImages/dandadan.jpg';
import kagurabachi from '../../../public/assets/mangaImages/kagurabachi.jpg';
import magicEmperor from '../../../public/assets/mangaImages/magicEmperor.jpg';
import onePiece from'../../../public/assets/mangaImages/onePiece.png';
import sakamotoDays from '../../../public/assets/mangaImages/sakamotoDays.jpg';
import bleach from '../../../public/assets/mangaImages/bleach.jpg';
import berserk from '../../../public/assets/mangaImages/berserk.jpg';
import jigokuraku from '../../../public/assets/mangaImages/jigokuraku.jpg';
import readerVp from '../../../public/assets/mangaImages/readersVp.jpg';
import slam from '../../../public/assets/mangaImages/slam.jpg';
import vagabond from '../../../public/assets/mangaImages/vagabond.jpg';

export default function Home() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const trendingItems = [
    { name: "One Piece", img: onePiece, url: "https://weebcentral.com/series/01J76XY7E9FNDZ1DBBM6PBJPFK/One-Piece" },
    { name: "Dandadan", img: dandadan, url: "https://weebcentral.com/series/dandadan" },
    { name: "Sakamoto Days", img: sakamotoDays, url: "https://weebcentral.com/series/sakamoto-days" },
    { name: "Baskerville", img: baskerville, url: "https://weebcentral.com/series/baskerville" },
    { name: "Magic Emperor", img: magicEmperor, url: "https://weebcentral.com/series/magic-emperor" },
    { name: "Kagurabachi", img: kagurabachi, url: "https://weebcentral.com/series/kagurabachi" },
    { name: "Omniscient Reader", img: readerVp, url: "https://weebcentral.com/series/omniscient-reader" }
  ];

  const recommendedItems = [
    { name: "Bleach", img: bleach, url: "https://weebcentral.com/series/bleach" },
    { name: "One Piece", img: onePiece, url: "https://weebcentral.com/series/01J76XY7E9FNDZ1DBBM6PBJPFK/One-Piece" },
    { name: "Berserk", img: berserk, url: "https://weebcentral.com/series/berserk" },
    { name: "Vagabond", img: vagabond, url: "https://weebcentral.com/series/vagabond" },
    { name: "Hells Paradise", img: jigokuraku, url: "https://weebcentral.com/series/hells-paradise" },
    { name: "Slam Dunk", img: slam, url: "https://weebcentral.com/series/slam-dunk" },
    { name: "Omniscient Reader", img: readerVp, url: "https://weebcentral.com/series/omniscient-reader" },
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
        <NavFrameRight>
          <NavItems>Store</NavItems>
          <NavItems>About</NavItems>
          <NavItems>User</NavItems>
        </NavFrameRight>
      </NavFrame>

      <ContentFrame>
        {/* If an item is selected, show the WebView (iframe) */}
        {selectedUrl ? (
          <div>
            <button 
              onClick={() => setSelectedUrl(null)}
              style={{
                marginBottom: "10px",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#ff4d4d",
                color: "white",
                cursor: "pointer"
              }}
            >
              Go Back
            </button>
            
            <div style={{ width: "100%", height: "600px", overflow: "hidden", position: "relative" }}>
              <iframe 
                src={selectedUrl} 
                style={{
                  width: "100%",   // Adjust width to crop content
                  height: "800px", // Increase height for better view
                  border: "none",
                  position: "relative",
                  top: "-180px"   // Move content upwards to hide unwanted parts
                }} 
                title="Manga Viewer"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        ) : (
          <>
            {/* Trending Pane */}
            <TrendingFrame>
              <TrendingIndicate>Trending</TrendingIndicate>
              <TrendingContent>
                {trendingItems.map((item, index) => (
                  <TrendingItem key={index} onClick={() => setSelectedUrl(item.url)}>
                    <TrendingImage src={item.img} alt={item.name} />
                    <TrendingName>{item.name}</TrendingName>
                  </TrendingItem>
                ))}
              </TrendingContent>
            </TrendingFrame>

            {/* Recommended Pane */}
            <RecommendedFrame>
              <RecommendIndicate>Recommended</RecommendIndicate>
              <RecommendContent>
                {recommendedItems.map((item, index) => (
                  <RecommendItem key={index} onClick={() => setSelectedUrl(item.url)}>
                    <RecommendImage src={item.img} alt={item.name} />
                    <RecommendName>{item.name}</RecommendName>
                  </RecommendItem>
                ))}
              </RecommendContent>
            </RecommendedFrame>
          </>
        )}
      </ContentFrame>
    </MainContainer>
  );
}
