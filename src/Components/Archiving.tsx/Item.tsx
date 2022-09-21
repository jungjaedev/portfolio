import React from 'react'
import styled from 'styled-components';
import { archivingList } from 'content/archiving';


interface ItemProps {
  type : string;
}

const Item = ({type} : ItemProps) => {
  const handleClickToHref = () => {
    window.open(archivingList[type].linkTo)
  }
  
  const DescriptionList = archivingList[type].description.map((item, idx) => {
    return <Description key={idx}>◆ {item}</Description>
  })
  return (
    <Wrapper 
    onClick={handleClickToHref}
    >
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


const Wrapper = styled.div`
  width: 27rem;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: white;
  margin: 0 3rem;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  transition: all ease-in 100ms;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    transform: translate(0, 1rem)
  }
`

const Subject = styled.div`
  display: flex;
  margin: 1.5rem 0;
  /* align-items: center; */
  /* justify-content: center; */
`

const SubjectImage = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

const SubjectText = styled.span`
  font-size: 3rem;
  margin: auto 0;
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

export default Item