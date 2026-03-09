import React from "react";
import styled from "styled-components";
import BuckmintLogo from "../../Assets/experience/logo.svg";
import ZoooxLogo from "../../Assets/zooox-logo.png"; 

const MainDiv = styled.div`
  padding-top: 70px;
  padding-bottom: 90px;
  font-family: "Rajdhani", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-top: 2rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #ffffff 20%, #ffcc99 50%, #fb7c14 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0px 4px 15px rgba(251, 124, 20, 0.25));
`;

const TreeContainer = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* The main vertical connecting line */
  &::before {
    content: "";
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 54px; /* Centers the line through the diamonds (20px padding + 35px half-width) */
    width: 2px;
    background: linear-gradient(to bottom, #fb7c14, rgba(255, 255, 255, 0.1) 80%);
    z-index: 0;

    @media (max-width: 600px) {
      left: 44px; /* Adjust for smaller screens */
    }
  }
`;

// --- COMPANY NODE (PARENT) ---

const CompanyNode = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 35px;
  position: relative;
  z-index: 1;
`;

const CompanyDotWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 10px;

  @media (max-width: 600px) {
    width: 50px;
  }
`;

const GlowingDot = styled.div`
  width: 22px;
  height: 22px;
  background-color: #fb7c14;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 4px #e36600;
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.p`
  color: #fafafa;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 6px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const RoleText = styled.p`
  color: #fb7c14; /* Orange accent for the role */
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CompanyDate = styled.p`
  color: #d9d7d7d3;
  font-size: 20px;
  font-weight: 300;
`;

// --- PRODUCT NODES (CHILDREN) ---

const ProductNode = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  position: relative;
  z-index: 1;

  /* Fancy hover effect on the whole row */
  &:hover .square {
    border-color: #fb7c14;
    box-shadow: 0px 0px 20px 2px rgba(251, 124, 20, 0.2);
    transform: rotate(45deg) scale(1.05);
  }

  &:hover .text-card {
    background: rgba(255, 255, 255, 0.05);
    border-left: 3px solid #fb7c14;
    transform: translateX(5px);
  }
`;

const ProductSquare = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #5d5f608d;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #121212; /* Matches dark background so line doesn't show through center */
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const SquareItem = styled.div`
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
`;

const ProductTextCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(93, 95, 96, 0.05);
  padding: 20px 25px;
  border-radius: 12px;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
  flex: 1;
`;

const ProductName = styled.p`
  color: #fafafa;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const ProductType = styled.p`
  color: rgba(255, 255, 255, 0.864);
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const ProductDate = styled.p`
  color: #d9d7d7d3;
  font-size: 18px;
  font-weight: 300;
`;

const Index = () => {
  return (
    <MainDiv>
      <SectionTitle>
        <GradientText>Experience</GradientText>
      </SectionTitle>

      <TreeContainer>
        
        {/* TOP LEVEL: Company Info */}
        <CompanyNode>
          <CompanyDotWrapper>
            <GlowingDot />
          </CompanyDotWrapper>
          <CompanyDetails>
            <CompanyName>Oxagen Technologies PVT LTD</CompanyName>
            <RoleText>Software Engineer</RoleText>
            <CompanyDate>03.2024 - Present • Noida, India</CompanyDate>
          </CompanyDetails>
        </CompanyNode>

        {/* SUB LEVEL 1: ZOOOX */}
        <ProductNode>
          <ProductSquare className="square">
            <SquareItem>
              <Logo src={ZoooxLogo} alt="ZOOOX Logo" />
            </SquareItem>
          </ProductSquare> 
          <ProductTextCard className="text-card">
            <ProductName>ZOOOX</ProductName>
            <ProductType>Mobile App & Web Platform</ProductType>
            <ProductDate>06.2025 - Present</ProductDate>
          </ProductTextCard>
        </ProductNode>

        {/* SUB LEVEL 2: Buckmint */}
        <ProductNode>
          <ProductSquare className="square">
            <SquareItem>
              <Logo src={BuckmintLogo} alt="Buckmint Logo" />
            </SquareItem>
          </ProductSquare>
          <ProductTextCard className="text-card">
            <ProductName>Buckmint DEX</ProductName>
            <ProductType>Web3 Exchange Dashboard</ProductType>
            <ProductDate>03.2024 - 06.2025</ProductDate>
          </ProductTextCard>
        </ProductNode>

      </TreeContainer>
    </MainDiv>
  );
};

export default Index;