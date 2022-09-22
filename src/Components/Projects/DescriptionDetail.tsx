import React from 'react'
import styled from 'styled-components';

interface ChildProps {
  type: string;
  content: string;
}

const DescriptionDetail = ({type, content} : ChildProps) => {
  return (
    <Wrapper>
      <DetailTitle>✔️ {type}</DetailTitle>
      <DetailContent>{content}</DetailContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`

const DetailTitle = styled.div`
  width: 30%;
`

const DetailContent = styled.div`
  width: 70%;
`

export default DescriptionDetail