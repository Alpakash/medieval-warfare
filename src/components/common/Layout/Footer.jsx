import React from "react";
import styled from 'styled-components';

const FooterElement = styled.p`
position: absolute;
bottom: 0;
margin-bottom: 20px;
left: 40px;
`;

const Footer = () => {
	return (
    <>
      <footer>
        <FooterElement>&copy; 2020 - New Day at Work</FooterElement>
      </footer>
    </>
  );
};

export default Footer;