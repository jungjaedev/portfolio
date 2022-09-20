import { ReactNode } from 'react';
import styled from 'styled-components';

interface BoxProps { 
  children: ReactNode;
  width?: string;
  height?: string;
  maxWidth?: string;
  justifyContent?: string;
  flexDirection?: 'row' | 'column';
  margin?: string;
  alignItems?: string;
  backgroundColor?: string;
  padding?: string;
}

const Box = ({ 
  children, 
  width, 
  height, 
  maxWidth, 
  justifyContent, 
  flexDirection,
  margin,
  alignItems,
  backgroundColor,
  padding
} : BoxProps) => {
  return (
    <Wrapper 
    style={{
      width, 
      height, 
      maxWidth, 
      justifyContent, 
      flexDirection,
      margin,
      alignItems,
      backgroundColor,
      padding
    }}>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 'auto';
`

export default Box;