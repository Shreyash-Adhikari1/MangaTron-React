import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const NavFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  background-color: #222327;
  padding: 0 20px;
`;

export const NavTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f5f5f5;
  cursor: pointer;
`;

export const UserMenuTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f5f5f5;
  cursor: pointer;
  &:hover {
    color: #ffcc00;
  }
`;

export const ContentFrame = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #393a3f;
`;

export const Dashboard = styled.div`
  width: 220px;
  background-color: #2b2c30;
  padding: 20px;
  height: 100%;
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
  &:hover {
    color: #ffcc00;
  }
`;

export const FormContainer = styled.div`
  background-color: #d3d3d3;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  background: #fff;
  padding: 10px;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 80px;
`;

export const FileInputLabel = styled.label`
  background-color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #000;
  cursor: pointer;
`;

export const StatusSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #fff;
  color: #000;
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #000;
  &:hover {
    background-color: #ddd;
  }
`;
