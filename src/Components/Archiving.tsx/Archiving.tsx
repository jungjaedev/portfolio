import React,{ useState } from 'react';
import styled from 'styled-components';
import Box from 'theme/Default/Box'
import TitleText from 'theme/Default/TitleText'
import Item from './Item';


const Archiving = () => {


  return (
    <Box 
    padding="4rem 0" 
    flexDirection="column" 
    justifyContent='center' 
    alignItems="center"
    backgroundColor="#333333"
    >
      <TitleText color="white">ARCHIVING</TitleText>
      <List>
        <Item type="Github" />
        <Item type="Velog" />
      </List>
    </Box>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`


export default Archiving