import React, { useState } from "react";
import styled from "styled-components";

import {history}from "../App";

import Select from "react-select";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  width: 340px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 10px;
  font-size: 18px;
`;
const PasswordInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 15px;
  width: fill-available;
  font-size: 18px;
  background: white;
  outline: none;
`;
const ReactSelect = styled(Select)`
  border-radius: 4px;
  width: 100%;
  background: white;
  outline: none;
  font-size: 18px;
`;
const LoginButton = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  margin: 15px 0;
  font-size: 18px;
  background: #0052cc;
  cursor: pointer;
  outline: none;
  border: none;
`;
const SignInText = styled.span`
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  margin: 15px;
`;
function LoginComponent() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const options = [
    { value: "Username1", label: "Sam" },
    { value: "Username2", label: "Sri" },
    { value: "Username3", label: "Sow" },
    { value: "Username4", label: "Zin" },
    { value: "Username5", label: "Max" },
  ];

  const onLoginClicked = (event) => {
    event.preventDefault();
   console.log('Class: LoginComponent, Function: username ==', username);
    console.log('Class: LoginComponent, Function: password ==', password);
    history.push("/home");
  };
  return (
    <Container>
      <SignInText>Sign in to your account</SignInText>
      <LoginForm onSubmit={onLoginClicked}> 
        <ReactSelect
          defaultValue={username}
          onChange={setUsername}
          options={options}
        />
        <PasswordInput
          placeholder="Password"
          type="sails@123"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </Container>
  );
}

export default LoginComponent;
