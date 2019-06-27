import { hot } from 'react-hot-loader/root';
import React from 'react';

// styles
import GlobalStyles from '../../stylesBase';
import * as Styled from './styled';

// components
import Sidebar from '../Sidebar';
import Header from '../Header';
import Realtors from '../Realtors';
import Features from '../Features';
import Story from '../Story';
import Homes from '../Homes';
import Gallery from '../Gallery';
import Footer from '../Footer';

const App = () => (
  <>
    <GlobalStyles />
    <Styled.Container>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Styled.Container>
  </>
);

export default hot(App);
