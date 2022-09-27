import { Link } from 'react-scroll';
import styled from 'styled-components';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';
import { useSetRecoilState } from "recoil";
import { scrollAtom } from 'state/seletedComponent';

const NavButtons = () => {
  const setScroll = useSetRecoilState(scrollAtom);

  const handleNavButton = (type: string) => {
    setScroll(type)
  }

  return (
    <Box justifyContent="space-between">
      <ButtonWrapper>
        <Link to="archiving" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("archiving")}>ARCHIVING</NavButton>
        </Link>
        <Link to="skills" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("skills")}>SKILLS</NavButton>
        </Link>
        <Link to="projects" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("projects")}>PROJECTS</NavButton>
        </Link>
        <Link to="contact" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("contact")}>CONTACT</NavButton>
        </Link>
      </ButtonWrapper>
    </Box>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default NavButtons;