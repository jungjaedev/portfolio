import React from 'react';
import Box from 'theme/Default/Box'
import Archiving from 'Components/Archiving/Archiving';
import Skills from 'Components/Skills/Skills';

const Body = () => {
  return (
    <Box flexDirection="column">
      <Archiving />
      <Skills />
    </Box>
  )
}

export default Body