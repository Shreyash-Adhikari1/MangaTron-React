import React, { useState, useEffect } from "react";
import { getMangaByCategory, logout } from "../../apis/api";
import {
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavItems,
  NavTitle,
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
  BackButton,
  UserMenuContainer,
  UserMenuDropdown,
  UserMenuItem,
} from "../../styles/HomeStyle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Function to handle admin access
    const handleAdminAccess = () => {
      const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
      if (isAdmin) {
        navigate("/admin");
      } else {
        toast.error("Only admin can access this page");
      }
    };
  
  // Separate states for different categories
  const [trendingManga, setTrendingManga] = useState([]);
  const [recommendedManga, setRecommendedManga] = useState([]);

  // Fetch manga categories on mount
  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        const trending = await getMangaByCategory("trending");
        const recommended = await getMangaByCategory("recommended");

        setTrendingManga(trending);
        setRecommendedManga(recommended);
      } catch (error) {
        console.error("Error fetching manga:", error);
      }
    };

    fetchMangaData();
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
        {/* WebView (Iframe) for Selected Manga */}
        {selectedUrl ? (
          <div>
            <BackButton onClick={() => setSelectedUrl(null)}>Go Back</BackButton>
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
            {/* Trending Section */}
            <TrendingFrame>
              <TrendingIndicate>Trending</TrendingIndicate>
              <TrendingContent>
                {trendingManga.length > 0 ? (
                  trendingManga.map((manga, index) => (
                    <TrendingItem key={index} onClick={() => setSelectedUrl(manga.url)}>
                      <TrendingImage src={manga.image} alt={manga.name} />
                      <TrendingName>{manga.name}</TrendingName>
                    </TrendingItem>
                  ))
                ) : (
                  <p>No trending manga available.</p>
                )}
              </TrendingContent>
            </TrendingFrame>

            {/* Recommended Section */}
            <RecommendedFrame>
              <RecommendIndicate>Recommended</RecommendIndicate>
              <RecommendContent>
                {recommendedManga.length > 0 ? (
                  recommendedManga.map((manga, index) => (
                    <RecommendItem key={index} onClick={() => setSelectedUrl(manga.url)}>
                      <RecommendImage src={manga.image} alt={manga.name} />
                      <RecommendName>{manga.name}</RecommendName>
                    </RecommendItem>
                  ))
                ) : (
                  <p>No recommended manga available.</p>
                )}
              </RecommendContent>
            </RecommendedFrame>
          </>
        )}
      </ContentFrame>
    </MainContainer>
  );
}
