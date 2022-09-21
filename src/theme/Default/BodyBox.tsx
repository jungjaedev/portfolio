import { ReactNode } from 'react';
import Box from './Box';

interface BodyBoxProps { 
  children: ReactNode;
  backgroundColor?: string;
}

const BodyBox = ({children, backgroundColor} : BodyBoxProps) => {
  return (
    <Box     
    padding="4rem 0" 
    flexDirection="column" 
    justifyContent='center' 
    alignItems="center"
    backgroundColor={backgroundColor}
    >{children}</Box>
  )
}


export default BodyBox