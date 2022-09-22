import React from 'react';
import Box from 'theme/Default/Box'
import Archiving from 'Components/Archiving/Archiving';
import Skills from 'Components/Skills/Skills';
import Projects from 'Components/Projects/Projects';

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