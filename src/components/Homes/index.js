import React from 'react';

// styles
import * as Styled from './styled';

// assets and data
import textdata from '../../assets/text.json';
import svgicons from '../../assets/sprite.svg';
import house1 from '../../assets/house-1.jpeg';
import house2 from '../../assets/house-2.jpeg';
import house3 from '../../assets/house-3.jpeg';
import house4 from '../../assets/house-4.jpeg';
import house5 from '../../assets/house-5.jpeg';
import house6 from '../../assets/house-6.jpeg';

const homesData = [
  { src: house1, alt: 'house 1' },
  { src: house2, alt: 'house 2' },
  { src: house3, alt: 'house 3' },
  { src: house4, alt: 'house 4' },
  { src: house5, alt: 'house 5' },
  { src: house6, alt: 'house 6' }
];

const Homes = () => (
  <Styled.Homes>
    {homesData.map(({ src, alt }, i) => {
      const { name, location, rooms, area, price } = textdata.homes[i];
      return (
        <Styled.Home key={alt}>
          <Styled.Image src={src} alt={alt} />
          <Styled.Like>
            <use href={`${svgicons}#icon-heart-full`}></use>
          </Styled.Like>
          <Styled.Name>{name}</Styled.Name>

          <Styled.Feature marginTop>
            <Styled.Icon>
              <use href={`${svgicons}#icon-map-pin`}></use>
            </Styled.Icon>
            <p>{location}</p>
          </Styled.Feature>

          <Styled.Feature marginTop>
            <Styled.Icon>
              <use href={`${svgicons}#icon-profile-male`}></use>
            </Styled.Icon>
            <p>{rooms}</p>
          </Styled.Feature>

          <Styled.Feature>
            <Styled.Icon>
              <use href={`${svgicons}#icon-expand`}></use>
            </Styled.Icon>
            <p>
              {area}
              <sup>2</sup>
            </p>
          </Styled.Feature>

          <Styled.Feature>
            <Styled.Icon>
              <use href={`${svgicons}#icon-key`}></use>
            </Styled.Icon>
            <p>{price}</p>
          </Styled.Feature>

          <Styled.HomeButton>Contact realtor</Styled.HomeButton>
        </Styled.Home>
      );
    })}
  </Styled.Homes>
);

export default Homes;
