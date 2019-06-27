import styled from 'styled-components/macro';

export const Heading1 = styled.h1`
  font-family: var(--font-display);
  font-weight: 400;
  color: ${({ dark }) =>
    !dark ? 'var(--color-grey-light-1)' : 'var(--color-grey-dark-1)'};
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
