import React from 'react'
import styled from 'styled-components';
import BodyBox from 'theme/Default/BodyBox'
import TitleText from 'theme/Default/TitleText'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <BodyBox backgroundColor="#EDEDED">
      <TitleText color="white">Projects</TitleText>
      <List>
        <ProjectItem type="Emotipop" />
      </List>
    </BodyBox>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  display: flex;
`





export default Projects