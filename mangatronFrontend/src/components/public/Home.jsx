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
  RecommendImage,
  WebViewContainer,
  WebViewIframe,
  BackButton
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
import lookism from '../../../public/assets/mangaImages/lookism.jpg'
import gokurakugai from '../../../public/assets/mangaImages/gokurakugai.jpeg'
import opm from '../../../public/assets/mangaImages/opm.jpeg'
import dad from '../../../public/assets/mangaImages/dad.jpg'
import out from '../../../public/assets/mangaImages/out.jpg'
import homunculus from '../../../public/assets/mangaImages/homunculus.jpeg'

export default function Home() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const trendingItems = [
    { name: "One Piece", img: onePiece, url: "https://weebcentral.com/series/01J76XY7E9FNDZ1DBBM6PBJPFK/One-Piece" },
    { name: "Dandadan", img: dandadan, url: "https://weebcentral.com/series/01J76XYEMWA55C7XTZHP1HNARM/Dandadan" },
    { name: "Sakamoto Days", img: sakamotoDays, url: "https://weebcentral.com/series/01J76XYE3130E1W5HKTJ7VD912/Sakamoto-Days" },
    { name: "Baskerville", img: baskerville, url: "https://weebcentral.com/series/01J76XYG95PJHF8P3PGVKJT5NQ/Return-of-the-Iron-Blooded-Hound" },
    { name: "Magic Emperor", img: magicEmperor, url: "https://weebcentral.com/series/01J76XYDT3Z0ZJ7NNG4Q74QFFG/Magic-Emperor" },
    { name: "Kagurabachi", img: kagurabachi, url: "https://weebcentral.com/series/01J76XYGGM22WZP7T4TKA4ZFAF/Kagurabachi" },
    { name: "Omniscient Reader", img: readerVp, url: "https://weebcentral.com/series/01J76XYDMWWJX3T4BFWR84FQQK/Omniscient-Readers-Viewpoint" },
    { name: "Lookism", img:lookism, url: "https://weebcentral.com/series/01J76XYBD282Y3XKX0KRGD64Q5/Lookism" },
    { name: "Gokurakugai", img: gokurakugai, url: "https://weebcentral.com/series/01J76XYFNQGKHPRGEJYNZF3A6E/Gokurakugai" },
    { name: "One-Punch Man", img: opm, url: "https://weebcentral.com/series/01J76XY7KT7J224EBK6J816Y1Q/Onepunch-Man" },
  ];

  const recommendedItems = [
    { name: "Bleach", img: bleach, url: "https://weebcentral.com/series/01J76XY7E4JCPK14V53BVQWD9Y/Bleach" },
    { name: "One Piece", img: onePiece, url: "https://weebcentral.com/series/01J76XY7E9FNDZ1DBBM6PBJPFK/One-Piece" },
    { name: "Berserk", img: berserk, url: "https://weebcentral.com/series/01J76XY7EF75DJNQCV04HTPDZK/Berserk" },
    { name: "Vagabond", img: vagabond, url: "https://weebcentral.com/series/01J76XY7J8BMXD4D0FM50MJHQG/Vagabond" },
    { name: "Hells Paradise", img: jigokuraku, url: "https://weebcentral.com/series/01J76XYCAJ8MJ5VECWQJE5QTP2/Jigokuraku-kaku-Yuuji" },
    { name: "Slam Dunk", img: slam, url: "https://weebcentral.com/series/01J76XY7GN9SV2VK3RTTCYQBEX/Slam-Dunk" },
    { name: "Omniscient Reader", img: readerVp, url: "https://weebcentral.com/series/01J76XYDMWWJX3T4BFWR84FQQK/Omniscient-Readers-Viewpoint" },
    { name: "Peerless Dad", img:dad , url: "https://weebcentral.com/series/01J76XYCXXB105QEZ4J82JBAEB/Peerless-Dad" },
    { name: "Out", img:out , url: "https://weebcentral.com/series/01J76XYDPQ762VGZBA5X2QK8SJ/Out-MIZUTA-Makoto" },
    { name: "Homunculus", img:homunculus , url: "https://weebcentral.com/series/01J76XY9FNA8SMJ003M6NPYZA0/Homunculus" }
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
            <BackButton onClick={() => setSelectedUrl(null)}>
              Go Back
            </BackButton>
            
            <WebViewContainer>
              <WebViewIframe 
                src={selectedUrl} 
                title="Manga Viewer"
                sandbox="allow-scripts allow-same-origin"
              />
            </WebViewContainer>
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
