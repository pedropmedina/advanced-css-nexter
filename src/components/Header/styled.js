import styled from 'styled-components/macro';

import { Button, mediaQueries } from '../../stylesShare';
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
  grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
  grid-template-columns: minmax(min-content, max-content);
  row-gap: 1.5rem;
  justify-content: center;

  ${mediaQueries.bpMedium`
    grid-column: 1 / -1;
  `}

  ${mediaQueries.bpSmall`
    padding: 5rem;
  `}
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
  align-items: center;

  img {
    max-height: 2.5rem;
    max-width: 100%;
    filter: brightness(70%);
  }
`;

export const HeaderButton = styled(Button)`
  align-self: start;
  justify-self: start;
`;
