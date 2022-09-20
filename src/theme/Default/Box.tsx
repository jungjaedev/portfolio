import { ReactNode } from 'react';
import styled from 'styled-components';

interface BoxProps { 
  children: ReactNode;
}

const Box = ({ children } : BoxProps) => {
  return (
    <Wrapper>{ children }</Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 'auto';
`



export default Box