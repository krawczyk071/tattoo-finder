import React from "react";
import styled from "styled-components";
import { Logo } from "./styles/Logo.styled";

const Footer = () => {
  return (
    <FooterMain>
      <FooterBox>
        <div>
          <Logo>
            <span>Tattoo</span>finder
          </Logo>
        </div>
        <p>Szymon Krawczyk © 2023</p>
        <p>Images by dgim-studio and inksyndromeartwork on Freepik</p>
      </FooterBox>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  background: white;
  border-top: 3px solid var(--accent);
  margin-top: 2rem;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;
