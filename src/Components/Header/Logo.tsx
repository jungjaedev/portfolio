import React from 'react';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';

const Logo = () => {
  const handleLogoButtonClick = () => {
    console.log('logo')
  }
  return (
    <Box>
      <NavButton onClick={handleLogoButtonClick} fontWeight="700" fontSize="2.5rem">
        JaeWon's Portfolio
      </NavButton>
    </Box>
  )
}



export default Logo