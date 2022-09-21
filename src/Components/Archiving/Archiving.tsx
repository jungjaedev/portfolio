import React from 'react';
import styled from 'styled-components';
import BodyBox from 'theme/Default/BodyBox'
import TitleText from 'theme/Default/TitleText'
import ArchivingItem from './ArchivingItem';


const Archiving = () => {
  return (
    <BodyBox backgroundColor="#333333">
      <TitleText color="white">ARCHIVING</TitleText>
      <List>
        <ArchivingItem type="Github" />
        <ArchivingItem type="Velog" />
      </List>
    </BodyBox>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`


export default Archiving