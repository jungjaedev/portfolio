import React from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Box from 'theme/Default/Box';
import useScrollTo from 'hooks/useScrollTo';

const Structure = () => {
  const [lastImageRef, scrollToLastImage] = useScrollTo<HTMLImageElement>();

  return (
    <Box alignItems="center" flexDirection="column" justifyContent="center" margin="0 auto">
      <Header />
      <Body ref={lastImageRef} />
      <Footer />
    </Box>
  )
}

export default Structure