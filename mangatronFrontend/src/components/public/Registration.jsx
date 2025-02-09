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
} from "../../styles/RegistrationStyle.js";
import logo from '../../../public/assets/images/logoMangatron.png'


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
        </Form>
      </RegisterBox>
    </Container>
  );
};

export default RegisterPage;
