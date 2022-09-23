import useScrollTo from 'hooks/useScrollTo';
import React, { RefObject, useRef } from 'react';
import styled from 'styled-components';
import BodyBox from 'theme/Default/BodyBox'
import TitleText from 'theme/Default/TitleText'
import SkillsItem from './SkillsItem';

interface SkillsProps {
  ref?: RefObject<HTMLImageElement>;
}

const Skills = ({ref} : SkillsProps) => {

  return (
    <BodyBox ref={ref} backgroundColor="#5D95BB">
      <TitleText color="white">Skills</TitleText>
      <List>
        <SkillsItem type="Frontend" />
        <SkillsItem type="Backend" />
        <SkillsItem type="Etc" />
      </List>
    </BodyBox>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  display: flex;
`

export default Skills