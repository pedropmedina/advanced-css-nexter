import styled from 'styled-components/macro';

export const Footer = styled.footer`
  background-color: var(--color-secondary);
  grid-column: full-start / full-end;
  padding: 8rem;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  align-items: center;
`;

export const Item = styled.li``;

export const Link = styled.a`
  &:link,
  &:visited {
    font-size: 1.4rem;
    color: #fff;
    font-family: var(--font-display);
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    display: block;
    padding: 1.5rem;
    transition: all 0.2s;

    &:hover,
    &:active {
      background-color: rgba(255, 255, 255, 0.05);
      transform: translateY(-3px);
    }
  }
`;
