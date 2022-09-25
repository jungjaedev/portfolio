import React from 'react';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';

const Logo = () => {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Box>
      <NavButton textAlign="left" onClick={handleClickToTop} fontWeight="700" fontSize="2.5rem">
        Jaewon Jung
      </NavButton>
    </Box>
  )
}



export default Logo