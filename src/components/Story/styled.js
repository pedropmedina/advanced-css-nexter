import styled from 'styled-components/macro';

import bg from '../../assets/back.jpg';

export const Pictures = styled.div`
  background-color: var(--color-primary);
  grid-column: full-start / col-end 4;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  background-image: linear-gradient(
      rgba(198, 153, 99, 0.5),
      rgba(198, 153, 99, 0.5)
    ),
    url(${bg});
`;

export const Image = styled.img`
  width: ${({ one }) => (one ? '100%' : '115%')};
  grid-row: ${({ one }) => (one ? '2 / 6' : '4 / 6')};
  grid-column: ${({ one }) => (one ? '2 / 6' : '4 / 7')};
  z-index: ${({ one }) => !one && 20};
  box-shadow: ${({ one }) =>
    one ? '0 2rem 5rem rgba(0,0,0,.1)' : '0 2rem 5rem rgba(0,0,0,.2)'};
`;

export const Content = styled.div`
  background-color: var(--color-grey-light-1);
  grid-column: col-start 5 / full-end;
  padding: 6rem 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: var(--mg-lg);
`;
