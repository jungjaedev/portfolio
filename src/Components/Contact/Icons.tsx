import React from 'react'
import styled from 'styled-components';
import { archivingList } from 'content/archiving';

const Icons = () => {
  const handleClick = (type: string) => {
    if(type === 'Kakao') {
      window.open('https://open.kakao.com/o/gHsXFgDe')
    } else {
      window.open(archivingList[type].linkTo)
    }
  }
  return (
    <div>
      <Image onClick={() => handleClick("Github")} src={require('assets/github.png')}></Image>
      <Image onClick={() => handleClick("Velog")} src={require('assets/velog.png')}></Image>
      <Image onClick={() => handleClick("Kakao")} src={require('assets/kakao.png')}></Image>
    </div>
  )
}

// https://open.kakao.com/o/gHsXFgDe

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem 1rem;
  border-radius: 10rem;

  &:hover {
    cursor: pointer;
  }
`

export default Icons