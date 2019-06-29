import React from 'react';

// styled components
import * as Styled from './styled';
import { Heading1, Heading3 } from '../../stylesShare';

// assets
import logo from '../../assets/logo.png';
import logoBBC from '../../assets/logo-bbc.png';
import logoForbes from '../../assets/logo-forbes.png';
import logoTechCrunch from '../../assets/logo-techcrunch.png';
import logoBI from '../../assets/logo-bi.png';

const logoImgsData = [
  { src: logoBBC, alt: 'Seen on 1' },
  { src: logoForbes, alt: 'Seen on 2' },
  { src: logoTechCrunch, alt: 'Seen on 3' },
  { src: logoBI, alt: 'Seen on 4' }
];

const Header = () => (
  <Styled.Header>
    <Styled.Logo src={logo} alt="" />
    <Heading3 as="h3">Your own home:</Heading3>
    <Heading1>The ultimate personal freedom</Heading1>
    <Styled.HeaderButton>View our properties</Styled.HeaderButton>
    <Styled.Text>Seen on</Styled.Text>
    <Styled.SeenonLogos>
      {logoImgsData.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} />
      ))}
    </Styled.SeenonLogos>
  </Styled.Header>
);

export default Header;
