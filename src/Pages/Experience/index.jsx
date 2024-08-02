import React from 'react'
import styled from 'styled-components'
import BuckmintCoverImg from '../../Assets/experience/Buckmint-cover-img.jpeg'

const MainDiv = styled.div`
  padding-top: 70px;
`
const CustomDiv = styled.div`
 height: 450px;
 display: flex;
 justify-content: center;
 gap: 40px;
 padding-top: 100px;
`
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const RightSection = styled.div`
  
`
const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  background-color: #fafafa;
`
const Line = styled.div`
  width: 1px ;
  height: 260px;
  background-color: #fafafa;
`
const Date = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  position: absolute;
  top: -7px;
  right:-10px;
  width: 140px;
`
const FinalDate = styled.p`
font-size: 16px;
color: #ffffff;
font-weight: 400;
position: absolute;
top: 260px;
/* right:-10px; */
width: 140px;
`
const SmallLogo = styled.div`
    background: -webkit-linear-gradient(
    -220deg,
    #816524c7,
    #e36600 19%,
    #a8642c 29%,
    rgba(25, 231, 231, 0.854) 59.58%,
    #ac8608 82.07%,
    #e36600d9 95.62%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  border-radius: 15px;
  font-size: 14px;
  margin-top: -20px;
  width: 90px;
`
const PositionText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`
const Info = styled.p`
margin-top: 5px;
  color: rgba(255,255,255,0.60);
  font-size: 14px;
`
const Time = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  margin-top: 2px;
`
const Image = styled.img`
  height: 140px;
  width: 380px;
  border-radius: 15px;
  margin-top: 20px;
  border: 2px solid #dad7d734;
`
const Index = () => {
  return (
    <MainDiv>
         <h1 className='gradientText SkillHeading text-4xl text-center font-medium mt-unit-4xl mb-unit-3xl'>Experience</h1>
           <CustomDiv>
              <LeftSection>
                <Date> March 18, 2024</Date>
                  <Circle/>
                  <Line/>
                  <Circle/>
                  <FinalDate>Present</FinalDate>
              </LeftSection>
              <RightSection>
                <SmallLogo >Buckmint</SmallLogo>
                <PositionText>Frontend Developer Intern</PositionText>
                <Info>Decentralized Exchange for Climate Assets</Info>
                <Time>March 2024 - Present</Time>
                <Image src={BuckmintCoverImg} alt="" />
              </RightSection>
           </CustomDiv>

    </MainDiv>
  )
}

export default Index