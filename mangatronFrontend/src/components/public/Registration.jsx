import React from "react";
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Label,
  Input,
  Button,
  LoginRed
} from "../../styles/RegistrationStyle.js";
import logo from '../../../public/assets/images/logoMangatron.png'
import { Link } from "react-router-dom";


const RegisterPage = () => {
  return (
    <Container>
      <RegisterBox>
        <Logo src={logo} alt="Logo" />
        <Title>Register to Login</Title>

        <Form>
          <Label>Username:</Label>
          <Input type="text" />

          <Label>Email:</Label>
          <Input type="email" />

          <Label>Password:</Label>
          <Input type="password" />

          <Button>Sign up</Button>
          <Link to="/">
            <LoginRed>Back To Login</LoginRed>
          </Link>
          
        </Form>
      </RegisterBox>
    </Container>
  );
};

export default RegisterPage;
