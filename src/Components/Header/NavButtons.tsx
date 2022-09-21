import React from 'react';
import styled from 'styled-components';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';

const NavButtons = () => {
  const handleNavButton = (type: string) => {
    console.log(type)
  }
  return (
    <Box>
      <NavButton onClick={()=>handleNavButton("aboutme")}>ARCHIVING</NavButton>
      <NavButton onClick={()=>handleNavButton("skills")}>SKILLS</NavButton>
      <NavButton onClick={()=>handleNavButton("projects")}>PROJECTS</NavButton>
      <NavButton onClick={()=>handleNavButton("contact")}>CONTACT</NavButton>
    </Box>
  )
}

export default NavButtons;