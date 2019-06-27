import React from 'react';

// styles
import * as Styled from './styled';
import { Heading3, Heading2, Button } from '../../stylesShare';

// assets
import textdata from '../../assets/text.json';
import story1 from '../../assets/story-1.jpeg';
import story2 from '../../assets/story-2.jpeg';

const Story = () => (
  <>
    <Styled.Pictures>
      <Styled.Image one src={story1} alt="Couple with new hous" />
      <Styled.Image src={story2} alt="New house" />
    </Styled.Pictures>
    <Styled.Content>
      <Heading3 as="h3">Happy Customers</Heading3>
      <Heading2 as="h2" dark>
        &ldquo;The best decision of our lives&rdquo;
      </Heading2>
      <Styled.ContentText>{textdata.stories[0]}</Styled.ContentText>
      <Button>Find your own home</Button>
    </Styled.Content>
  </>
);

export default Story;
