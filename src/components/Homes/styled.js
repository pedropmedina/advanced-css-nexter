import styled from 'styled-components/macro';

import { Button } from '../../stylesShare';

export const Homes = styled.section`
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 7rem;
  margin: 15rem 0;
`;

export const Home = styled.div`
  background-color: var(--color-grey-light-1);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3.5rem;
`;

export const Image = styled.img`
  width: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 1;
`;

export const Icon = styled.svg`
  fill: var(--color-primary);
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;

export const Like = styled(Icon)`
  width: 2.5rem;
  height: 2.5rem;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  z-index: 2;
  justify-self: end;
  margin: 1rem;
`;

export const Name = styled.h5`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: end;
  z-index: 3;

  width: 80%;
  font-family: var(--font-display);
  font-size: 1.6rem;
  text-align: center;
  padding: 1.25rem;
  background-color: var(--color-secondary);
  color: #fff;
  font-weight: 400;
  transform: translateY(50%);
`;

export const Text = styled.p`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  margin-top: ${({ marginTop }) => (marginTop ? '2.5rem' : 'initial')};
`;

export const CardButton = styled(Button)`
  grid-column: 1 / -1;
`;
