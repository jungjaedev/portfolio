import { RefObject, useEffect, useRef } from 'react';
import Box from 'theme/Default/Box'
import Archiving from 'Components/Archiving/Archiving';
import Skills from 'Components/Skills/Skills';
import Projects from 'Components/Projects/Projects';
import useScrollTo from 'hooks/useScrollTo';
interface SkillsProps {
  ref?: RefObject<HTMLImageElement>;
}

const Body = ({ref} : SkillsProps) => {
  

  return (
    <Box flexDirection="column">
      <Archiving />
      <Skills ref={ref} />
      <Projects />
    </Box>
  )
}

export default Body