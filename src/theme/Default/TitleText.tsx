import { ReactNode } from 'react';
import styled from 'styled-components';


interface TitleTextProps { 
  children: ReactNode;
  color?: string;
  fontSize?:string;
  textAlign?:  'left' | 'right' | 'center';
  marginBottom?: string;
}

const TitleText = ({children, color, fontSize, textAlign, marginBottom} : TitleTextProps) => {
  return (
    <Wrapper style={{color, fontSize, textAlign}}>
      {children}
      <Line style={{marginBottom}} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
`

const Line = styled.div`
  border: 1px solid #d3d3d3;
  margin: 0.5rem 0 4rem;
`

export default TitleText