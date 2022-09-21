import { ReactNode } from 'react';
import styled from 'styled-components';


interface TitleTextProps { 
  children: ReactNode;
  color?: string;
}

const TitleText = ({children, color} : TitleTextProps) => {
  return (
    <Wrapper style={{color}}>
      {children}
      <Line />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
`

const Line = styled.div`
  border: 1px solid #d3d3d3;
  margin-top: 0.5rem;
`

export default TitleText