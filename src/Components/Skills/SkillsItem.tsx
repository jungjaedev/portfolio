import React from 'react'
import { skillsList } from 'content/skills';
import ItemBox from 'theme/Default/ItemBox';
import styled from 'styled-components';
import TitleText from 'theme/Default/TitleText';

interface ItemProps {
  type : string;
}

const SkillsItem = ({type} : ItemProps) => {
  const skillsImageList = skillsList[type].imageList.map((item, idx)=> {
    return <Image key={idx} src={item} />
  })
  return (
    <ItemBox width="20rem" padding="3rem 2rem">
      <TitleText marginBottom="1rem" fontSize='2rem' color="#E50D06">{type}</TitleText>
      {skillsImageList}
    </ItemBox>
  )
}

const Image = styled.img`
  max-width: 100%;
  max-height: 8rem;
`

export default SkillsItem