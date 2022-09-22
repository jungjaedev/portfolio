import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { projectsList } from 'content/projects';
import { ProjectsListProps } from 'content/projects';

interface ChildProps {
  currentProject: ProjectsListProps;
}


const ProjectImageSlider = ({currentProject}: ChildProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const slideRef = useRef<any>(null);
  const imageNum = projectsList["Emotipop"].imageList.length;
  

  const nextSlide = () => {
    if (currentImage >= imageNum - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  const preSlide = () => {
    if (currentImage === 0) {
      setCurrentImage(imageNum - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  useEffect(() => {
    if(slideRef.current) {
      slideRef.current.style.transition = "all 200ms ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentImage}00%)`
    }
  },[currentImage])

  const images = projectsList["Emotipop"].imageList.map((item, idx) => {
    return <Image src={item} key={idx} />
  })
  
  return (
    <Wrapper>
      <ImageSlider ref={slideRef}>
        {images}
      </ImageSlider>
      <Buttons>
        <Button src={require('assets/left-arrow.png')} onClick={preSlide} />
        {currentImage + 1}/{imageNum}
        <Button src={require('assets/right-arrow.png')} onClick={nextSlide} />
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 30rem;
  overflow: hidden;
  padding: 0 2.5rem;
  margin: 2.5rem 3rem 0;
`

const Image = styled.img`
  width: 20rem;
  margin: 0 2.5rem;
`

const ImageSlider = styled.div`
  margin: 0 auto;
  display: flex;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.img`
  width: 0.8rem;
  height: 100%;
  margin: 2rem 1vw;

  &:hover {
    cursor: pointer;
  }
`



export default ProjectImageSlider