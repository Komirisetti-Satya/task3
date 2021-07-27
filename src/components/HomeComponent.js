import React from "react";
import styled from "styled-components"
import {history} from "../App";


const LogoutButton = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  margin: 20px 0;
  font-size: 18px;
  background: #0052cc;
  cursor: pointer;
  outline: none;
  border: none;
`;
function HomeComponent() {
    const onLogoutClicked =  (event) => {
        event.preventDefault();
        history.push('/')
    };
    return (
            <LogoutButton onClick={onLogoutClicked}>Logout</LogoutButton>
    );
}

export default HomeComponent;
