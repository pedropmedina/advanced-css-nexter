import React from 'react';

import * as Styled from './styled';

// data
const footerData = [
  'Find your dream home',
  'Request proposal',
  'Download home planner',
  'Contact us',
  'Submit your project',
  'Come work wth us!'
];

const Footer = () => (
  <Styled.Footer>
    <Styled.List>
      {footerData.map((item, i) => (
        <Styled.Item key={i}>
          <Styled.Link href="#">{item}</Styled.Link>
        </Styled.Item>
      ))}
    </Styled.List>
  </Styled.Footer>
);

export default Footer;
