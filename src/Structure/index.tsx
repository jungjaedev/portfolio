import React from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Box from 'theme/Default/Box';

const Structure = () => {
  return (
    <Box maxWidth='1200px' alignItems="center" flexDirection="column" justifyContent="center" margin="0 auto" padding="0 2rem">
      <Header />
      <Body />
      <Footer />
    </Box>
  )
}

export default Structure