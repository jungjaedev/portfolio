import React from 'react';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';

const Logo = () => {
  const handleLogoButtonClick = () => {
    console.log('logo')
  }
  return (
    <Box>
      <NavButton textAlign="left" onClick={handleLogoButtonClick} fontWeight="700" fontSize="2.5rem">
        Jaewon Jung
      </NavButton>
    </Box>
  )
}



export default Logo