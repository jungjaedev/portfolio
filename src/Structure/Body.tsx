import { RefObject, useEffect, useRef } from 'react';
import Box from 'theme/Default/Box'
import Archiving from 'Components/Archiving/Archiving';
import Skills from 'Components/Skills/Skills';
import Projects from 'Components/Projects/Projects';
import useScrollTo from 'hooks/useScrollTo';
interface SkillsProps {
  ref?: RefObject<HTMLImageElement>;
}

const Body = () => {
  

  return (
    <Box flexDirection="column">
      <Archiving />
      <Skills />
      <Projects />
    </Box>
  )
}

export default Body