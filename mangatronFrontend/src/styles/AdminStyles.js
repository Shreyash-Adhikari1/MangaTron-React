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
  height: 80px;
  width: 100%;
  background-color: #222327;
  padding: 0 20px;
`;

export const NavTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #f5f5f5;
`;

export const LogoutButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #ffd700;
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

export const DashboardTitle = styled.h2`
  font-size: 20px;
  color: #ffcc00;
  margin-bottom: 10px;
`;

export const DashboardItem = styled.p`
  font-size: 16px;
  color: #f5f5f5;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
  &:hover {
    background-color: #3a3b3f;
    color: #ffcc00;
  }
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

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  background: #ffcc00;
  padding: 10px;
  border-radius: 5px;
  color: #222;
  font-size: 20px;
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

export const StatusSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #ffcc00;
  color: #222;
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #ffd700;
  }
`;

export const FileInputLabel = styled.label`
  background-color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #000;
  cursor: pointer;
`;

export const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  background-color: #ffcc00;
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
`;

export const ActionButton = styled.button`
  background-color: #ff5733;
  color: white;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background 0.3s ease;
  &:hover {
    background-color: #ff2e00;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 5px;
`;
