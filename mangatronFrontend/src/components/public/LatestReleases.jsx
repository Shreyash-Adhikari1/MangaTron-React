import React, { useState, useEffect } from 'react';
import { getMangaByCategory, logout } from '../../apis/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { 
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavTitle,
  UserMenuContainer,
  UserMenuDropdown,
  UserMenuItem,
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
import { Link } from 'react-router-dom';

export default function LatestReleases() {
  const navigate = useNavigate();
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [latestManga, setLatestManga] = useState([]);

  // Function to handle admin access
      const handleAdminAccess = () => {
        const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
        if (isAdmin) {
          navigate("/admin");
        } else {
          toast.error("Only admin can access this page");
        }
      };
    

  // Fetch latest manga on component mount
  useEffect(() => {
    const fetchLatestManga = async () => {
      try {
        const latest = await getMangaByCategory("latest");
        setLatestManga(latest);
      } catch (error) {
        console.error("Error fetching latest manga:", error);
      }
    };

    fetchLatestManga();
  }, []);

  return (
    <MainContainer>
      {/* Navigation Pane */}
      <NavFrame>
              <NavTitle>Mangatron</NavTitle>
              <NavItemsFrame>
                <Link to="/home">
                  <NavItems>Home</NavItems>
                </Link>
                <Link to="/latest">
                  <NavItems>Latest Releases</NavItems>
                </Link>
                <Link to="/store">
                  <NavItems>Store</NavItems>
                </Link>
                <UserMenuContainer
                  onMouseEnter={() => setIsUserMenuOpen(true)}
                  onMouseLeave={() => setIsUserMenuOpen(false)}
                >
                  <NavItems>User</NavItems>
                  {isUserMenuOpen && (
                    <UserMenuDropdown>
                      <UserMenuItem onClick={handleAdminAccess} >Go To Admin</UserMenuItem>
                      <UserMenuItem onClick={() => logout()}>Logout</UserMenuItem>
                    </UserMenuDropdown>
                  )}
                </UserMenuContainer>
              </NavItemsFrame>
            </NavFrame>

      <ContentFrame>
        {/* If an item is selected show the WebView*/}
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
            {/* Latest Releases Section */}
            <LatestFrame>
              <LatestIndicate>Latest Releases</LatestIndicate>
              <LatestContent>
                {latestManga.length > 0 ? (
                  latestManga.map((manga, index) => (
                    <LatestItem key={index} onClick={() => setSelectedUrl(manga.url)}>
                      <LatestImage src={manga.image} alt={manga.name} />
                      <LatestName>{manga.name}</LatestName>
                    </LatestItem>
                  ))
                ) : (
                  <p>No latest manga available.</p>
                )}
              </LatestContent>
            </LatestFrame>
          </>
        )}
      </ContentFrame>
    </MainContainer>
  );
}
