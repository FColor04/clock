import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  faClock,
  faHourglass,
} from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 30vw;
  @media screen and (max-width: 1000px) {
    padding: 0 15vw;
  }
  @media screen and (max-width: 600px) {
    padding: 0 3vw;
  }
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.navigationColor};
  ${({ theme }) => theme.outset};
`;

type CustomLinkProps = {
  children: React.ReactNode,
  icon: any,
  href: string,
  tabindex?: number
};

// Used inside Custom Link only

const StyledLink = styled.a<{ theme: any, active: boolean }>`
  position: relative;
  color: ${({ theme, active }) => (active ? theme.activeLocationTextColor : theme.primaryColor)};
  ${({ theme, active }) => active
  && `
  background-color: ${theme.activeLocationColor};
  box-shadow: 0 0 0.7rem -0.2rem ${theme.activeLocationColor};
  `}
  width: 12ch;
  text-align: center;
  padding: 0.5rem;
  border-radius: 100vw;
  text-decoration: none;
  transition: transform 0.1s;
  &:hover {
    transform: translateY(-0.4rem);
    text-decoration: underline;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-left: 0.5ch;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

//

const CustomLink = ({ children, icon, href } : CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <StyledLink active={router.asPath === href}>
        {children}
        <Icon icon={icon} />
      </StyledLink>
    </Link>
  );
};

const Navigation = () => (
  <Nav>
    <CustomLink href="/" icon={faClock}>
      Clock
    </CustomLink>
    <CustomLink href="/stopwatch" icon={faHistory}>
      Stopwatch
    </CustomLink>
    <CustomLink href="/timer" icon={faHourglass}>
      Timer
    </CustomLink>
  </Nav>
);

export default Navigation;
