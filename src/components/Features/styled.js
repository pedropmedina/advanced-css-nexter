import styled from 'styled-components/macro';

export const Features = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 6rem;
  align-items: start;
`;

export const Feature = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 1.5rem;
  column-gap: 2.5rem;
`;

export const Icon = styled.svg`
  fill: var(--color-primary);
  width: 4.5rem;
  height: 4.5rem;
  grid-row: 1 / span 2;
  transform: translateY(-1rem);
`;

export const Text = styled.p`
  font-size: 1.7rem;
`;
