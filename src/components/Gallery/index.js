import React from 'react';

import * as Styled from './styled';

// assets
import gal1 from '../../assets/gal-1.jpeg';
import gal2 from '../../assets/gal-2.jpeg';
import gal3 from '../../assets/gal-3.jpeg';
import gal4 from '../../assets/gal-4.jpeg';
import gal5 from '../../assets/gal-5.jpeg';
import gal6 from '../../assets/gal-6.jpeg';
import gal7 from '../../assets/gal-7.jpeg';
import gal8 from '../../assets/gal-8.jpeg';
import gal9 from '../../assets/gal-9.jpeg';
import gal10 from '../../assets/gal-10.jpeg';
import gal11 from '../../assets/gal-11.jpeg';
import gal12 from '../../assets/gal-12.jpeg';
import gal13 from '../../assets/gal-13.jpeg';
import gal14 from '../../assets/gal-14.jpeg';

const imagesData = [
  { src: gal1, alt: 'gallery image 1' },
  { src: gal2, alt: 'gallery image 2' },
  { src: gal3, alt: 'gallery image 3' },
  { src: gal4, alt: 'gallery image 4' },
  { src: gal5, alt: 'gallery image 5' },
  { src: gal6, alt: 'gallery image 6' },
  { src: gal7, alt: 'gallery image 7' },
  { src: gal8, alt: 'gallery image 8' },
  { src: gal9, alt: 'gallery image 9' },
  { src: gal10, alt: 'gallery image 10' },
  { src: gal11, alt: 'gallery image 11' },
  { src: gal12, alt: 'gallery image 12' },
  { src: gal13, alt: 'gallery image 13' },
  { src: gal14, alt: 'gallery image 14' }
];

const Gallery = () => (
  <Styled.Gallery>
    {imagesData.map(({ src, alt }) => (
      <Styled.Item key={alt} order={alt.substring(alt.indexOf(' ')).trim()}>
        <Styled.Image src={src} alt={alt} />
      </Styled.Item>
    ))}
  </Styled.Gallery>
);

export default Gallery;
