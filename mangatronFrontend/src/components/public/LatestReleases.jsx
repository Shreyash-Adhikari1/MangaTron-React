import React, { useState } from 'react';
import { 
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavFrameRight,
  NavItems,
  ContentFrame,
  LatestContent,
  LatestFrame,
  LatestIndicate,
  LatestItem,
  LatestName,
  LatestImage,
  LatestWebViewContainer,
  LatestWebViewIframe,
  LatestBackButton
} from '../../styles/LatestReleasesStyle';


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
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const latestItems = [
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
    { name: "Magic Emperor", img: magicEmperor, url: "https://weebcentral.com/series/01J76XYDT3Z0ZJ7NNG4Q74QFFG/Magic-Emperor" },
    { name: "Kagurabachi", img: kagurabachi, url: "https://weebcentral.com/series/01J76XYGGM22WZP7T4TKA4ZFAF/Kagurabachi" },
    { name: "Omniscient Reader", img: readerVp, url: "https://weebcentral.com/series/01J76XYDMWWJX3T4BFWR84FQQK/Omniscient-Readers-Viewpoint" },
    { name: "Lookism", img:lookism, url: "https://weebcentral.com/series/01J76XYBD282Y3XKX0KRGD64Q5/Lookism" },
    { name: "Gokurakugai", img: gokurakugai, url: "https://weebcentral.com/series/01J76XYFNQGKHPRGEJYNZF3A6E/Gokurakugai" },
    { name: "One-Punch Man", img: opm, url: "https://weebcentral.com/series/01J76XY7KT7J224EBK6J816Y1Q/Onepunch-Man" },
    
  ];

  return (
    <MainContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavItemsFrame>
          <Link to='/home'> <NavItems>Home</NavItems>  </Link>
          
          <Link to='/latest'> <NavItems>Latest Releases</NavItems> </Link>

          <Link to='/genre'> <NavItems>Genres</NavItems> </Link>
        </NavItemsFrame>
        <NavFrameRight>
          <Link to='/store'> <NavItems>Store</NavItems> </Link>
          <Link to='/favourites'> <NavItems>Favourites</NavItems> </Link>

          <NavItems>User</NavItems>
        </NavFrameRight>
      </NavFrame>

      <ContentFrame>
        {/* If an item is selected, show the WebView (iframe) */}
        {selectedUrl ? (
          <div>
            <LatestBackButton onClick={() => setSelectedUrl(null)}>
              Go Back
            </LatestBackButton>
            
            <LatestWebViewContainer>
              <LatestWebViewIframe 
                src={selectedUrl} 
                title="Manga Viewer"
                sandbox="allow-scripts allow-same-origin"
              />
            </LatestWebViewContainer>
          </div>
        ) : (
          <>
            {/* Trending Pane */}
            <LatestFrame>
              <LatestIndicate>Latest Releases</LatestIndicate>
              <LatestContent>
                {latestItems.map((item, index) => (
                  <LatestItem key={index} onClick={() => setSelectedUrl(item.url)}>
                    <LatestImage src={item.img} alt={item.name} />
                    <LatestName>{item.name}</LatestName>
                  </LatestItem>
                ))}
              </LatestContent>
            </LatestFrame>
          </>
        )}
      </ContentFrame>
    </MainContainer>
  );
}
