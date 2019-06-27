import React from 'react';

// styles
import * as Styled from './styled';
import { Heading4 } from '../../stylesShare';

// data and assets
import textdata from '../../assets/text.json';
import svgicons from '../../assets/sprite.svg';

const { features } = textdata;

const Features = () => (
  <Styled.Features>
    {features.map(({ heading, text, icon }) => (
      <Styled.Feature key={icon}>
        <Styled.Icon>
          <use href={svgicons + icon}></use>
        </Styled.Icon>
        <Heading4 as="h4" dark>
          {heading}
        </Heading4>
        <Styled.Text>{text}</Styled.Text>
      </Styled.Feature>
    ))}
  </Styled.Features>
);

export default Features;
