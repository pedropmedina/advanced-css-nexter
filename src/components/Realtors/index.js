import React from 'react';

import * as Styled from './styled';
import { Heading3, Heading4 } from '../../stylesShare';

// assets
import realtor1 from '../../assets/realtor-1.jpeg';
import realtor2 from '../../assets/realtor-2.jpeg';
import realtor3 from '../../assets/realtor-3.jpeg';

const realtorsData = [
  {
    src: realtor1,
    alt: 'realtor 1',
    name: 'Erik Feiman',
    sold: '245 houses sold'
  },
  {
    src: realtor2,
    alt: 'realtor 2',
    name: 'Kim Brown',
    sold: '212 houses sold'
  },
  {
    src: realtor3,
    alt: 'realtor 3',
    name: 'Toby Ramsey',
    sold: '198 houses sold'
  }
];

const Realtors = () => (
  <Styled.Realtors>
    <Heading3>Top 3 Realtors</Heading3>
    <Styled.Profiles>
      {realtorsData.map(({ src, alt, name, sold }) => (
        <>
          <Styled.Photo src={src} alt={alt} />
          <Styled.Details>
            <Heading4>{name}</Heading4>
            <p>{sold}</p>
          </Styled.Details>
        </>
      ))}
    </Styled.Profiles>
  </Styled.Realtors>
);

export default Realtors;
