import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 203vh;
  flex-direction: column;
  overflow: hidden;
`;

export const NavFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  min-height: 100px;
  width: 100vw;
  background-color: #222327;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const NavTitle = styled.p`
  font-size: 24px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #f5f5f5;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const User = styled.p`
  font-size: 24px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #f5f5f5;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
    transform: scale(1.09);
  }

  &:active {
    color: #ffcc00;
  }
`;

export const UserMenuTitle = styled.p`
  font-size: 24px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #f5f5f5;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
    transform: scale(1.09);
  }

  &:active {
    color: #ffcc00;
  }
`;


export const ContentFrame = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1800px;
  background-color: #393a3f;
`;
export const Dashboard = styled.div`
  width: 220px;
  background-color: #2b2c30;
  padding: 20px;
  border-radius: 10px;
  flex-shrink: 0; /* Prevents shrinking */
  height: 100%; /* Full height to stay fixed */
`;

export const DashboardTitle = styled.h3`
  font-size: 18px;
  color: #ffcc00;
  margin-bottom: 10px;
`;

export const DashboardItem = styled.p`
  font-size: 16px;
  color: #f5f5f5;
  cursor: pointer;
  margin: 10px 0;
  transition: all 0.3s;

  &:hover {
    color: #ffcc00;
    transform: scale(1.09);
  }

  /* Active category effect */
  &.active {
    color: #ffcc00;
    font-weight: bold;
    text-decoration: underline;
  }
`;
