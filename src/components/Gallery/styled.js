import styled, { css } from 'styled-components/macro';

const generateItemGrid = order => {
  const gridData = {
    'image 1': { 'grid-row': '1 / span 2', 'grid-column': '1 / span 2' },
    'image 2': { 'grid-row': '1 / span 3', 'grid-column': '3 / span 3' },
    'image 3': { 'grid-row': '1 / span 2', 'grid-column': '6 / 7' },
    'image 4': { 'grid-row': '1 / span 2', 'grid-column': '7 / -1' },
    'image 5': { 'grid-row': '3 / span 3', 'grid-column': '1 / span 2' },
    'image 6': { 'grid-row': '4 / span 2', 'grid-column': '3 / span 2' },
    'image 7': { 'grid-row': '4 / 5', 'grid-column': '5 / 6' },
    'image 8': { 'grid-row': '3 / span 2', 'grid-column': '6 / span 2' },
    'image 9': { 'grid-row': '3 / span 3', 'grid-column': '8 / -1' },
    'image 10': { 'grid-row': '6 / span 2', 'grid-column': '1 / 2' },
    'image 11': { 'grid-row': '6 / span 2', 'grid-column': '2 / span 2' },
    'image 12': { 'grid-row': '6 / span 2', 'grid-column': '4 / 5' },
    'image 13': { 'grid-row': '5 / span 3', 'grid-column': '5 / span 3' },
    'image 14': { 'grid-row': '6 / span 2', 'grid-column': '8 / -1' }
  };
  return gridData[order];
};

export const Gallery = styled.section`
  background-color: var(--color-grey-light-1);
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  gap: 1.5rem;
  padding: 1.5rem;
`;

export const Item = styled.figure`
  ${({ order }) => css(generateItemGrid(order))}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
