import React from 'react'
import styled from 'styled-components';
import { archivingList } from 'content/archiving';

const Icons = () => {
  const handleClick = (type: string) => {
    window.open(archivingList[type].linkTo)
  }
  return (
    <div>
      <Image onClick={() => handleClick("Github")} src={require('assets/github.png')}></Image>
      <Image onClick={() => handleClick("Velog")} src={require('assets/velog.png')}></Image>
    </div>
  )
}

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