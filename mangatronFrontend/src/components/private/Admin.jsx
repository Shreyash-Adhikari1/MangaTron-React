import React, { useState } from "react";
import {
  AdminContainer,
  NavFrame,
  UserMenuTitle,
  ContentFrame,
  Dashboard,
  DashboardTitle,
  DashboardItem,
  NavTitle,
} from "../../styles/AdminStyles";
import { logout } from "../../apis/api";

export default function Admin() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  return (
    <AdminContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavTitle>MangaTron Admin Dashboard</NavTitle>
              
        <UserMenuTitle onClick={() => logout()}>Logout</UserMenuTitle>
             
      </NavFrame>
      <ContentFrame>
        <Dashboard>
          <DashboardTitle>Admin Dashboard</DashboardTitle>
          <DashboardItem>Add To Trending</DashboardItem>

          <DashboardItem>Add To Recommended</DashboardItem>

          <DashboardItem>Add To Latest</DashboardItem>

          <DashboardItem>Add To Shop</DashboardItem>
        </Dashboard>
      </ContentFrame>
    </AdminContainer>
  );
}
