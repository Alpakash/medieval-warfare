import React from "react";
import styled from 'styled-components';

const FooterElement = styled.p`
position: absolute;
bottom: 0;
margin-bottom: 20px;
`;

export const Footer = () => {
	return (
    <>
      <footer>
        <FooterElement>&copy; 2020 - New Day at Work</FooterElement>
      </footer>
    </>
  );
};