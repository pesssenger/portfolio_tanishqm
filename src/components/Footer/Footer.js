import React from 'react';
import {  AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem target="_blank" href="mailto:maheshwaritan001@gmail.com">maheshwaritan001@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>❤️ to Create</Slogan>
        </CompanyContainer>
        <SocialContainer>

          <SocialIcons target="_blank" href="https://www.linkedin.com/in/tanishq-maheshwari-5605b71ab/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.instagram.com/tanishq__maheshwari/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
