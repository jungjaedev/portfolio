import React from 'react'
import styled from 'styled-components';
import { ProjectsListProps } from 'content/projects';
import DescriptionDetail from './DescriptionDetail';

interface ChildProps {
  currentProject: ProjectsListProps;
}

const ProjcetDescriptions = ({currentProject}: ChildProps) => {
  return (
    <Wrapper>
      <Description>{currentProject.description}</Description>
      <Line />
      <DescriptionDetail type="주요 기능" content={currentProject.function} />
      <DescriptionDetail type="Stacks" content={currentProject.stack} />
      <DescriptionDetail type="Github" content={currentProject.github} />
      <DescriptionDetail type="URL" content={currentProject.url} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  width: 30rem;
`

const Description = styled.div`
`

const Line = styled.div`
  border: 1px solid #d3d3d3;
  margin: 2rem 0;
`

export default ProjcetDescriptions