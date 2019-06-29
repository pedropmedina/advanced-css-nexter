import styled from 'styled-components/macro';

import { mediaQueries } from '../../stylesShare';

export const Sidebar = styled.div`
  background-color: var(--color-primary);
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;

  ${mediaQueries.bpLarge`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: flex-end;
    align-items: center;
  `}
`;

export const SidebarButton = styled.button`
  border: none;
  border-radius: 0;

  background-color: #fff;
  height: 2px;
  width: 4.5rem;
  margin-top: 4rem;

  &::before,
  &::after {
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    content: '';
    display: block;
  }

  &::before {
    transform: translateY(-1.5rem);
  }

  &::after {
    transform: translateY(1.5rem);
  }

  ${mediaQueries.bpLarge`
    margin-top: 0;
    margin-right: 3rem;

    &::before {
      transform: translateY(-1.2rem);
    }

    &::after {
      transform: translateY(1rem);
    }
  `}
`;
