import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

export const LoginBox = styled.div`
  width: 350px;
  padding: 30px;
  border: 2px solid #007bff;
  border-radius: 5px;
  text-align: center;
  background-color: #ffffff;
  align-self: center;
  margin-left: 500px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  margin-bottom: 10px;
  background: transparent;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #222;
  }
`;

export const RegisterText = styled.p`
  margin-top: 15px;
  font-size: 14px;
`;

export const RegisterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  max-width: 400px;
  img {
    width: 100%;
    height: auto;
  }
`;
