import React from 'react'
import styled from 'styled-components';
import { archivingList } from 'content/archiving';
import ItemBox from '../../theme/Default/ItemBox';
import { typeProps } from '../../types/common';

const ArchivingItem = ({type} : typeProps) => {
  const DescriptionList = archivingList[type].description.map((item, idx) => {
    return <Description key={idx}>◆ {item}</Description>
  })

  const handleClick = () => {
    window.open(`${archivingList[type].linkTo}`)
  }

  return (
    <Wrapper margin='1rem' onClick={handleClick}>
      <Subject>
        <SubjectImage src={archivingList[type].image} />
        <SubjectText>{archivingList[type].title}</SubjectText>
      </Subject>
      <Link>{archivingList[type].link}</Link>
      <Descriptions>
        {DescriptionList}
      </Descriptions>
    </Wrapper>
  )
}

const Wrapper = styled(ItemBox)`
`

const Subject = styled.div`
  display: flex;
  margin: 1.5rem 0;
  height: 3rem;
`

const SubjectImage = styled.img`
  width: 3rem;
  margin-right: 1rem;
  height: 100%;
`

const SubjectText = styled.div`
  font-size: 3rem;
  margin: auto 0;
  line-height: 3rem;
  height: 100%;
  vertical-align: bottom;
  padding-top: 3px;
`

const Link = styled.span`
  color: ${({ theme }) => theme.blue};

  ${Wrapper}:hover & {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }
`

const Descriptions = styled.div`
  margin: 1.5rem 0;
`

const Description = styled.div`
  margin: 1rem 0;
`

export default ArchivingItem