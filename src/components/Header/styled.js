import styled from 'styled-components/macro';

import { Button } from '../../stylesShare';
import hero from '../../assets/hero.jpeg';

export const Header = styled.header`
  background-color: var(--color-grey-dark-1);
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
      rgba(16, 29, 44, 0.93),
      rgba(16, 29, 44, 0.93)
    ),
    url(${hero});
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;

  display: grid;
  grid-template-rows: 1fr min-content 6rem 1fr;
  grid-template-columns: max-content;
  row-gap: 1.5rem;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 3rem;
  justify-self: center;
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  align-items: center;

  font-size: 1.6rem;
  color: var(--color-grey-light-2);

  &::before,
  &::after {
    content: '';
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

export const SeenonLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  justify-items: center;

  img {
    height: 2.5rem;
    filter: brightness(70%);
  }
`;

export const HeaderButton = styled(Button)`
  align-self: start;
  justify-self: start;
`;
