import React, { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Label,
  Input,
  Button,
  LoginRed,
} from "../../styles/RegistrationStyle.js";
import logo from "../../../public/assets/images/logoMangatron.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast for notifications
import { registerApi } from "../../apis/api.jsx";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Step 2: Create a function for the state variable
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
  
    const data = { username, email, password };
    console.log("Form data:", data);
  
    try {
      const res = await registerApi(data);
      console.log("Response:", res);
  
      if (res.status === 201) {
        toast.success(res.data.message || "Registration successful!", {
          className: "toast-success",
        });
        console.log("Navigating to login...");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(res.data.message || "Registration failed!", {
          className: "toast-error",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Internal server error", { className: "toast-error" });
    }
  };
  

  return (
    <Container>
      <RegisterBox>
        <Logo src={logo} alt="Logo" />
        <Title>Register to Login</Title>

        <Form>
          <Label>Username:</Label>
          <Input type="text" value={username} onChange={changeUsername} />

          <Label>Email:</Label>
          <Input type="email" value={email} onChange={changeEmail} />

          <Label>Password:</Label>
          <Input type="password" value={password} onChange={changePassword} />

          <Button type="button" onClick={handleSubmit}>
            Signup
          </Button>
          <Link to="/">
            <LoginRed>Back To Login</LoginRed>
          </Link>
        </Form>
      </RegisterBox>
    </Container>
  );
};

export default RegisterPage;
