import { ReactNode, RefObject } from 'react';
import Box from './Box';

interface BodyBoxProps { 
  children: ReactNode;
  backgroundColor?: string;
  ref?: RefObject<HTMLImageElement>;
}

const BodyBox = ({children, backgroundColor, ref} : BodyBoxProps) => {
  return (
    <Box     
    ref={ref}
    padding="4rem 0" 
    flexDirection="column" 
    justifyContent='center' 
    alignItems="center"
    backgroundColor={backgroundColor}
    >{children}</Box>
  )
}


export default BodyBox