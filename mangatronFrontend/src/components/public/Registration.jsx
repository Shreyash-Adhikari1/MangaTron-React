import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../../apis/api.jsx";
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Label,
  Input,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
  Button,
  LoginRed,
} from "../../styles/RegistrationStyle.js";
import logo from "/assets/images/logoMangatron.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false, // Default to false
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;
    if (!username || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      console.log("Submitting Registration Data:", formData);
      const res = await registerApi(formData);

      if (res.status === 201) {
        toast.success(res.data.message || "Registration successful!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(res.data.message || "Registration failed!");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <RegisterBox>
        <Logo src={logo} alt="MangaTron Logo" />
        <Title>Register to Login</Title>

        <Form onSubmit={handleSubmit}>
          <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
            disabled={loading}
          />

          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            disabled={loading}
          />

          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
            disabled={loading}
          />

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            />
            <CheckboxLabel>Register as Admin</CheckboxLabel>
          </CheckboxContainer>

          <Button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Signup"}
          </Button>
        </Form>

        <Link to="/">
          <LoginRed>Back To Login</LoginRed>
        </Link>
      </RegisterBox>
    </Container>
  );
};

export default RegisterPage;
