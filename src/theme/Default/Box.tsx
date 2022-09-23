import { ReactNode, RefObject } from 'react';
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
  ref?: RefObject<HTMLImageElement>;
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
  padding,
  ref,
} : BoxProps) => {
  return (
    <Wrapper 
    ref={ref}
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