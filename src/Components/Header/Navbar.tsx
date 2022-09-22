import React from 'react';
import Box from 'theme/Default/Box'
import Logo from './Logo';
import NavButtons from './NavButtons';

const Navbar = () => {
  return (
    <Box height="3rem" maxWidth="1200px" justifyContent="space-between" alignItems="center">
      <Logo />
      <NavButtons />
    </Box>
  )
}

export default Navbar