import React, { useState } from "react";
import {
  Container,
  LoginBox,
  Title,
  Form,
  Label,
  Input,
  Button,
  RegisterText,
  ImageContainer,
} from "../../styles/LoginStyles.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi } from "../../apis/api.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const data = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      toast.error("Email and Password are required!");
      return;
    }

    console.log("Sending data:", data); 

    loginApi(data)
      .then((res) => {
        console.log("Response:", res); 
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          const convertedJson = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJson);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        toast.error("Server Error! Please try again later.");
      });
  };

  return (
    <Container>
      <LoginBox>
        <Title>MangaTron LOGIN</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Email :</Label>
          <Input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            required
          />

          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <Button type="button" onClick={handleSubmit}>
            Start Reading
          </Button>
        </Form>

        <RegisterText>
          Don’t Have An Account? <Link to="/register">Register Here</Link>
        </RegisterText>
      </LoginBox>
      <ImageContainer>
        <img src="/assets/images/satoru.png" alt="Login Image" />
      </ImageContainer>
    </Container>
  );
};

export default LoginPage;
