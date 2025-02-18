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
  RegisterLink,
  ImageContainer,
} from "../../styles/LoginStyles.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast for notifications
import { loginApi } from "../../apis/api.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    // api call
    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // set token and user data in local storage
          localStorage.setItem("token", res.data.token);

          // Converting incoming JSON
          const convertedJson = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJson);

          // Navigate to homepage after successful login
          navigate("/homepage");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
  };

  return (
    <Container>
      <LoginBox>
        <Title>MangaTron LOGIN</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Email :</Label>
          <Input type="email" value={email} onChange={handleChangeEmail} required />

          <Label>Password:</Label>
          <Input type="password" value={password} onChange={handleChangePassword} required />

          <Button type="submit">Start Reading</Button>
        </Form>

        <Link to="/register">
          <RegisterText>
            Don’t Have An Account? <RegisterLink>Register Here</RegisterLink>
          </RegisterText>
        </Link>
      </LoginBox>

      <ImageContainer>
        <img src="/assets/images/satoru.png" alt="Login Image" />
      </ImageContainer>
    </Container>
  );
};
export default LoginPage;