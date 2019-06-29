import styled from 'styled-components/macro';

import { mediaQueries } from '../../stylesShare';

export const Realtors = styled.div`
  background-color: var(--color-secondary);
  grid-column: col-start 7 / full-end;
  padding: 3rem;
  display: grid;
  align-content: center;
  justify-content: center;
  row-gap: 2rem;
  justify-items: center;

  ${mediaQueries.bpMedium`
    grid-column: 1 / -1;
  `}
`;

export const Profiles = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 2rem;
  row-gap: 5vh;
  align-items: center;

  ${mediaQueries.bpMedium`
    grid-template-columns: repeat(3, min-content max-content);
  `}

  ${mediaQueries.bpSmall`
    grid-template-columns: min-content max-content;
  `}
`;

export const Photo = styled.img`
  width: 7rem;
  border-radius: 50%;
  display: block;
`;

export const Details = styled.div`
  p {
    text-transform: uppercase;
    color: var(--color-grey-light-2);
  }
`;
