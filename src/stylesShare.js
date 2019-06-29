import styled, { css } from 'styled-components/macro';

const breakpoints = {
  bpLargest: '1200',
  bpLarge: '1000',
  bpMedium: '800',
  bpSmall: '600'
};

// create an object with css properties based on breakpoint
// { bpLarge: (..args) => css``, bpMedium: etc... }
export const mediaQueries = Object.keys(breakpoints).reduce((queries, bp) => {
  queries[bp] = (...args) => css`
    @media only screen and (max-width: ${breakpoints[bp] / 16}em) {
      ${css(...args)}
    }
  `;
  return queries;
}, {});

export const Heading1 = styled.h1`
  font-family: var(--font-display);
  font-weight: 400;
  color: ${({ dark }) =>
    !dark ? 'var(--color-grey-light-1)' : 'var(--color-grey-dark-1)'};
  font-size: 4.5rem;
  line-height: 1;
`;

export const Heading2 = styled(Heading1)`
  font-size: 4rem;
  font-style: italic;
  line-height: 1;
  margin-bottom: var(--mg-md);
`;

export const Heading3 = styled(Heading1)`
  font-size: 1.6rem;
  color: var(--color-primary);
  text-transform: uppercase;
  margin-bottom: var(--mg-sm);
`;

export const Heading4 = styled(Heading1)`
  font-size: 1.9rem;
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
