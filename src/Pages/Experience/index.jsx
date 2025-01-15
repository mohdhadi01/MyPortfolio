import React from "react";
import styled from "styled-components";
import BuckmintLogo from "../../Assets/experience/logo.svg";
import BuckmintName from "../../Assets/experience/logo-name.svg";

const MainDiv = styled.div`
  padding-top: 70px;
  padding-bottom: 50px;
`;
const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  font-family: Rajdhani;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  min-width: 130px;
  @media (max-width: ${600}px) {
    min-width: auto;
  }

  /* @media (max-width: ${500}px) {
    top: -10px;
  } */
`;
const RightSection = styled.div`
  /* margin-top: -10px; */
  width: 400px;
  @media (max-width: ${500}px) {
    width: 250px;
  }
`;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  /* border-radius: 100%; */
  transform: rotate(45deg);
  background-color: #fb7c14;
  box-shadow: 0px 0px 20px 3px #e36600;
`;
const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: absolute;
`;
const Line = styled.div`
  width: 1px;
  /* height: 200px; */
  flex-grow: 1;
  background-color: #c2bdbd84;
  margin-right: 7px;
`;
const TextBg = styled.div`
  padding: 10px 6px 10px 10px;
  height: 22px;
  position: relative;
  background-color: #5d5f608d;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
const CompanySquare = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #5d5f608d;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${740}px) {
    /* top: -10px; */
    display: none;
  }
`;
const SquareItem = styled.div`
  transform: rotate(-45deg);
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 24px;
  height: 24px;
`;
const LogoName = styled.img`
  height: 18px;
  width: 80px;
`;
const Triangle = styled.div`
  background-color: #5d5f608d;
  height: 16px;
  width: 16px;
  right: -8px;
  transform: rotate(135deg);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  position: absolute;
`;
const Date = styled.p`
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  line-height: 1;
  text-shadow: 0px 0px 2px #ffffff82;
`;
const FinalDate = styled.p`
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  line-height: 1;
  text-shadow: 0px 0px 2px #ffffff82;
`;

const PositionText = styled.p`
  color: #fafafa;
  font-size: 28px;
  font-weight: 500;
  @media (max-width: ${500}px) {
    font-size: 24px;
  }
`;
const Info = styled.p`
  /* margin-top: 5px; */
  color: rgba(255, 255, 255, 0.864);
  font-size: 27px;
  line-height: 42px;
  font-weight: 400;
  @media (max-width: ${500}px) {
    font-size: 22px;
  }
`;
const MainDate = styled.p`
  /* margin-top: 5px; */
  color: #d9d7d7d3;
  font-size: 26px;
  line-height: 42px;
  font-weight: 300;
  @media (max-width: ${500}px) {
    font-size: 23px;
  }
`;

const DetailContainer = styled.div`
  /* margin-top: 20px; */
  color: #ffffffb0;
  font-size: 14px;
  ul {
    list-style-type: disc; /* Ensures bullet points */
    margin-left: 20px; /* Adds indentation */
    padding-left: 20px; /* Adds spacing */
  }
  li {
    margin-bottom: 10px;
  }
`;
const Index = () => {
  return (
    <MainDiv>
      <h1 className="gradientText SkillHeading text-4xl text-center font-medium mt-unit-4xl mb-unit-3xl mb-24 ">
        Experience
      </h1>
      <CustomDiv>
        <LeftSection>
          <CircleWrapper>
            {/* <TextBg>
              <Date>Present </Date>
              <Triangle />
            </TextBg> */}
            <CompanySquare>
              <SquareItem>
                <Logo src={BuckmintLogo} alt="Buckmint Logo" />
                <LogoName src={BuckmintName} alt="Buckmint Logo" />
              </SquareItem>
            </CompanySquare>
            <Circle />
          </CircleWrapper>
          <Line />
          {/* <CircleWrapper>
            <TextBg>
              <FinalDate>March, 2024</FinalDate>
              <Triangle />
            </TextBg>
            <Circle />
          </CircleWrapper> */}
        </LeftSection>
        <RightSection className="mb-28">
          <PositionText>Frontend Developer (Full Time)</PositionText>

          <Info>Buckmint, Noida</Info>
          <MainDate>08.2024 - Currently</MainDate>
          {/* <DetailContainer>
            <ul>
              <li>
                Architected and developed the Android Zooox-App using React
                Native, integrating all GraphQL APIs using Apollo Client.
              </li>
              <li>
                Partnered with the design team to build Buckmint's exchange
                dashboard, enhancing UI/UX, which led to a 25% increase in user
                engagement.
              </li>
              <li>
                Managed GitHub repositories and DigitalOcean server
                infrastructure, demonstrating proficiency in version control,
                deployment strategies, and server configuration with Nginx.
              </li>
            </ul>
          </DetailContainer> */}
          {/* <Image src={BuckmintCoverImg} alt="" /> */}
        </RightSection>
      </CustomDiv>

      <CustomDiv>
        <LeftSection>
          <CircleWrapper>
            {/* <TextBg>
              <Date>August, 2024 </Date>
              <Triangle />
            </TextBg> */}
            <CompanySquare>
              <SquareItem>
                <Logo src={BuckmintLogo} alt="Buckmint Logo" />
                <LogoName src={BuckmintName} alt="Buckmint Logo" />
              </SquareItem>
            </CompanySquare>
            <Circle />
          </CircleWrapper>
          <Line />
          {/* <CircleWrapper>
            <TextBg>
              <FinalDate>March, 2024</FinalDate>
              <Triangle />
            </TextBg>
            <Circle />
          </CircleWrapper> */}
        </LeftSection>
        <RightSection>
          <PositionText>Frontend Developer (Intern)</PositionText>
          <Info>Buckmint, Noida</Info>
          <MainDate>03.2024 - 08.2024</MainDate>
          {/* <DetailContainer>
            <ul>
              <li>
                Developed the Buckmint’s primary exchange dashboard, and landing
                page leveraging React, Redux, TypeScript, and Styled Components
                to create a robust and intuitive user interface for tokenized
                credit transactions.
              </li>
              <li>
                Integrated essential features such as real-time data
                visualization using Advance TradingView candle charts, ensuring
                seamless and dynamic trading experiences for users.
              </li>
            </ul>
          </DetailContainer> */}
          {/* <Image src={BuckmintCoverImg} alt="" /> */}
        </RightSection>
      </CustomDiv>
    </MainDiv>
  );
};

export default Index;
