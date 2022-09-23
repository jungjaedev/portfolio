import React from 'react';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';
import  useScrollTo  from 'hooks/useScrollTo';


const NavButtons = () => {
  const [lastImageRef, scrollToLastImage] = useScrollTo<HTMLImageElement>();
  const handleNavButton = (type: string) => {
    console.log(type)
  }

  return (
    <Box>
      {/* <NavButton onClick={()=>handleNavButton("archiving")}>ARCHIVING</NavButton> */}
      <NavButton onClick={() => scrollToLastImage(true)}>ARCHIVING</NavButton>
      <NavButton onClick={()=>handleNavButton("skills")}>SKILLS</NavButton>
      <NavButton onClick={()=>handleNavButton("projects")}>PROJECTS</NavButton>
      <NavButton onClick={()=>handleNavButton("contact")}>CONTACT</NavButton>
    </Box>
  )
}

export default NavButtons;