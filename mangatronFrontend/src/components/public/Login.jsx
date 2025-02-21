import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi } from "../../apis/api.jsx";
import {
  Container,
  LoginBox,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
  RegisterText,
  RegisterLink,
  ImageContainer,
} from "../../styles/LoginStyles.js";
import loginImage from "../../../public/assets/images/satoru.png";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      console.log("📤 Sending Login Data:", formData);
      const res = await loginApi(formData);

      console.log("📥 Backend Response:", res.data); // Debugging log

      if (res && res.access_token) {
        // Remove `data` when checking the response
        localStorage.setItem("token", res.access_token);
        toast.success(res.message || "Login successful!");
        setTimeout(() => navigate("/home"), 1000);
      } else {
        toast.error(res?.message || "Login failed! No token received.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      toast.error(
        err.response?.data?.message || "Invalid credentials or server issue."
      );
    }
  };

  return (
    <Container>
      <LoginBox>
        <FormContainer>
          <Title>MangaTron LOGIN</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Email :</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Label>Password :</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Button type="submit">Start Reading</Button>
          </Form>

          <RegisterText>
            Don’t Have An Account?{" "}
            <RegisterLink href="/register">Register Here</RegisterLink>
          </RegisterText>
        </FormContainer>

        <ImageContainer>
          <img src={loginImage} alt="Login Illustration" />
        </ImageContainer>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
