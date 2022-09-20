import React from 'react';
import Box from 'theme/Default/Box'
import Logo from './Logo';
import NavButtons from './NavButtons';

const Navbar = () => {
  return (
    <Box alignItems="center">
      <Logo />
      <NavButtons />
    </Box>
  )
}

export default Navbar