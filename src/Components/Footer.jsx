// import React from "react";
// import Logo from "../Assets/myLogo.png";
// import Twitter from "../Assets/twitter (2).png";
// import { Parallax } from "react-scroll-parallax";
// import styled from "styled-components";

// const FooterWrapper = styled.footer`
//   margin-top: 50px;
//   height: 340px;
//   background-color: hsla(0, 0%, 99%, 0.059);
//   padding: 40px;

//   @media screen and (max-width: 820px) {
//     width: 100vw;
//   }
// `;

// const LogoWrapper = styled.div`
//   filter: contrast(150%);
// `;

// const SocialIconWrapper = styled.div`
//   transition: 0.4s;

//   &:hover {
//     cursor: pointer;
//     transform: scale(1.1);
//   }
// `;

// const CreditText = styled.h1`
//   text-align: center;

//   @media screen and (max-width: 460px) {
//     font-size: 0.8rem;
//   }
// `;

// const CreditHr = styled.hr`
//   &.HrFooter {
//     @media screen and (max-width: 460px) {
//       width: 0;
//     }
//   }
// `;

// function Myfooter() {
//   return (
//     <FooterWrapper>
//       <div className="screenSize">
//         <Parallax speed={-20}>
//           <div className="main-gradient1 left-0 top-10" />
//           <div className="main-gradient1 right-0 top-10" />
//         </Parallax>
//       </div>
//       <LogoWrapper className="Logo w-40">
//         <img src={Logo} alt="" />
//       </LogoWrapper>
//       <h4 className="para text-sm">
//         I like building new things and turn visions into vibrant code as a
//         frontend wizard. I worked on Many projects as a developer using most
//         recent Technologies.
//       </h4>
//       <div className="SocialsDiv mx-8 my-10 flex gap-6 justify-center">
//         <a href="mailto: hadi.88923@gmail.com">
//           <SocialIconWrapper>
//             <svg
//               stroke="#ff7a2c"
//               fill="#ce6629f5"
//               strokeWidth="0"
//               viewBox="0 0 24 24"
//               className="SocialIconss text-secondary hover:text-secondary/50  text-2xl md:text-3xl "
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
//             </svg>
//           </SocialIconWrapper>
//         </a>
//         <a
//           href="https://github.com/mohdhadi01/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <SocialIconWrapper>
//             <svg
//               stroke="#ff7a2c"
//               fill="#ce6629f5"
//               strokeWidth="0"
//               viewBox="0 0 1024 1024"
//               className="SocialIconss text-secondary hover:text-secondary/50  text-2xl md:text-3xl "
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
//             </svg>
//           </SocialIconWrapper>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/mohd-hadi-5a4638226/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <SocialIconWrapper>
//             <svg
//               stroke="#ff7a2c"
//               fill="#ce6629f5"
//               strokeWidth="0"
//               viewBox="0 0 448 512"
//               className="SocialIconss text-secondary hover:text-secondary/50  text-2xl md:text-3xl "
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
//             </svg>
//           </SocialIconWrapper>
//         </a>
//         <a
//           href="https://twitter.com/mohdhadi01/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <SocialIconWrapper>
//             <img
//               src={Twitter}
//               className="SocialIconss"
//               alt="Twitter"
//             />
//           </SocialIconWrapper>
//         </a>
//       </div>
//       <div className="Credit flex">
//         <CreditHr className="Hr HrFooter w-56" />
//         <CreditText className="NameCredit text-slate-50">
//           © 2026 Mohd Hadi. All rights reserved.
//         </CreditText>
//         <CreditHr className="Hr HrFooter w-56" />
//       </div>
//     </FooterWrapper>
//   );
// }

// export default Myfooter;

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Assets
import Logo from "../Assets/myLogo.png";
import Twitter from "../Assets/twitter (2).png";

// --- BACKGROUND & LAYOUT ---

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 100px 20px 40px 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  font-family: "Rajdhani", sans-serif;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
  z-index: 0;
  pointer-events: none;
`;

const BottomGlow = styled.div`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(251, 124, 20, 0.12) 0%,
    transparent 70%
  );
  filter: blur(80px);
  z-index: 0;
  pointer-events: none;
`;

// --- CONTENT ---

const ContentZIndex = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoAura = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(251, 124, 20, 0.4);
  filter: blur(30px);
  border-radius: 50%;
  z-index: 0;
`;

const FloatingLogo = styled(motion.img)`
  width: 150px;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5)) contrast(150%);
  z-index: 1;
`;

const BioText = styled(motion.p)`
  text-align: center;
  color: #a0aec0;
  font-size: 17px;
  line-height: 1.6;
  max-width: 550px;
  margin-bottom: 45px;

  .highlight {
    color: #ffffff;
    font-weight: 600;
  }

  .orange {
    color: #fb7c14;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(251, 124, 20, 0.3);
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

// --- MAGNETIC SOCIAL ICONS ---

const SocialsRow = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
`;

const MagneticArea = styled(motion.div)`
  position: relative;
  display: inline-block;
  padding: 15px; /* The magnetic pull zone */
`;

const SocialGlassCircle = styled(motion.a)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    width: 22px;
    height: 22px;
    fill: #a0aec0;
    transition:
      fill 0.3s ease,
      transform 0.3s ease;
  }

  img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(0.6);
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(251, 124, 20, 0.1);
    border-color: #fb7c14;
    box-shadow: 0 10px 30px rgba(251, 124, 20, 0.3);

    svg {
      fill: #fb7c14;
      transform: scale(1.1);
    }

    img {
      filter: brightness(0) invert(60%) sepia(100%) saturate(3000%)
        hue-rotate(340deg) brightness(100%) contrast(100%);
      transform: scale(1.1);
    }
  }
`;

const MagneticSocial = ({ href, children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <MagneticArea
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <SocialGlassCircle href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </SocialGlassCircle>
    </MagneticArea>
  );
};

// --- COPYRIGHT & DIVIDER ---

const DividerContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LaserLine = styled(motion.div)`
  height: 1px;
  flex: 1;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(251, 124, 20, 0.6),
    transparent
  );
  transform-origin: center;
`;

const CopyrightText = styled.p`
  color: #8b949e;
  font-size: 14px;
  font-family: monospace;
  white-space: nowrap;

  .cursor {
    display: inline-block;
    width: 6px;
    height: 14px;
    background-color: #fb7c14;
    vertical-align: middle;
    margin-left: 6px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// --- ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

// --- MAIN COMPONENT ---

function Myfooter() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <GridOverlay />
      <BottomGlow />

      <ContentZIndex>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Levitating Logo with Subtle Aura */}
          <LogoContainer>
            <LogoAura
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div variants={itemVariants}>
              <FloatingLogo
                src={Logo}
                alt="Mohd Hadi Logo"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </LogoContainer>

          {/* Polished Bio */}
          <BioText variants={itemVariants}>
            Turning complex visions into{" "}
            <span className="highlight">vibrant code</span>. <br />I specialize
            in building scalable applications using the most{" "}
            <span className="orange">recent technologies</span>.
          </BioText>

          {/* Magnetic Social Row */}
          <SocialsRow variants={itemVariants}>
            <MagneticSocial href="mailto:hadi.88923@gmail.com">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
              </svg>
            </MagneticSocial>

            <MagneticSocial href="https://github.com/mohdhadi01/">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </MagneticSocial>

            <MagneticSocial href="https://www.linkedin.com/in/mohd-hadi-5a4638226/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </MagneticSocial>

            <MagneticSocial href="https://twitter.com/mohdhadi01/">
              <img src={Twitter} alt="Twitter" />
            </MagneticSocial>
          </SocialsRow>

          {/* Cyber Copyright Divider */}
          <DividerContainer>
            <LaserLine variants={lineVariants} />
            <motion.div variants={itemVariants}>
              <CopyrightText>
                © {currentYear} Mohd Hadi. All rights reserved
                <span className="cursor"></span>
              </CopyrightText>
            </motion.div>
            <LaserLine variants={lineVariants} />
          </DividerContainer>
        </motion.div>
      </ContentZIndex>
    </FooterWrapper>
  );
}

export default Myfooter;
