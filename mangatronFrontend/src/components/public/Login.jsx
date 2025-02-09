import React from "react";

import {
  Container,
  LoginBox,
  Title,
  Form,
  Label,
  Input,
  Button,
  RegisterText,
  RegisterLink,
  ImageContainer,
} from '../../styles/LoginStyles.js'; // The css//styles imported from style components file
import loginImage from '../../../public/assets/images/satoru.png'





const LoginPage = () => {
  return (
    
    <Container>
      <LoginBox>
        <Title>MangaTron LOGIN</Title>

        <Form>
          <Label>Email :</Label>
          <Input type="email" />

          <Label>Password:</Label>
          <Input type="password" />

          <Button>Start Reading</Button>
        </Form>

        <RegisterText>
          Don’t Have An Account? <RegisterLink href="">Register Here</RegisterLink>
        </RegisterText>
      </LoginBox>

      <ImageContainer>
      <img src={loginImage} alt="Login Image" />

      </ImageContainer>
    </Container>
  );
};
export default LoginPage;
