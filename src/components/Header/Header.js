import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiReact size='3rem' /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href='#project'>
          <NavLink>-Project-</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>-Skills-</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>-About-</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>

      <SocialIcons href="https://github.com/ryo666-6">
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/%E6%B6%BC-%E9%AB%98%E6%9C%A8-7825191b5/">
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/uuuyyy25138858">
        <AiFillTwitterCircle size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
