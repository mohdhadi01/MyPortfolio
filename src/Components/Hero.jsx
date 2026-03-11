// import React from "react";
// import styled from "styled-components";
// import profileImg from "../Assets/edited_dp-ast6yqVUK-transformed.jpg";
// import Arrow from "../Assets/arrow.png";
// import Twitter from "../Assets/twitter (2).png";
// import { Parallax } from "react-scroll-parallax";

// const HeroSection = styled.section`
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   padding-top: 50px;

//   @media screen and (max-width: 480px) {
//     margin-top: -40px;
//   }
// `;

// const Description = styled.div`
//   width: 500px;
//   margin-left: 30px;
//   margin-top: 85px;
//   display: flex;
//   flex-direction: column;
//   font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
//     "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
// `;

// // Matches the original .gradientText from Hero.css
// const GradientText = styled.span`
//   background: -webkit-linear-gradient(
//     -220deg,
//     #816524c7,
//     #e36600 19%,
//     #a8642c 29%,
//     rgba(25, 231, 231, 0.854) 59.58%,
//     #ac8608 82.07%,
//     #e36600 95.62%
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// `;

// const HelloText = styled.h3`
//   margin: 0.25rem 0;

//   @media screen and (max-width: 480px) {
//     margin-bottom: -10px;
//   }
// `;

// const Name = styled.h2`
//   color: rgb(201, 195, 195);
//   margin-top: 20px;
//   margin-bottom: 10px;
// `;

// const FrontendTitle = styled.h2``;

// const Paragraph = styled.p`
//   color: rgb(201, 195, 195);
//   margin-top: 25px;

//   @media screen and (max-width: 480px) {
//     font-size: 0.7rem;
//   }
// `;

// const ImageWrapper = styled.div`
//   animation: scale-zoom 1s ease-in-out both;
//   animation-delay: 1.2s;
// `;

// const ProfileImage = styled.img`
//   margin-top: 85px;
//   margin-right: 30px;
//   width: 190px;
//   border-radius: 30px;
//   filter: saturate(120%);
//   box-shadow: 0px 1px 2px rgba(8, 6, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.5),
//     0px 4px 8px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(8, 4, 0, 0.5);
//   border: 2px solid rgba(0, 0, 0, 0.281);
//   animation: rotateLogo 1.5s ease-in-out both;
//   animation-delay: 1s;

//   @media screen and (max-width: 720px) {
//     margin-top: 120px;
//     margin-left: -20px;
//     width: 250px;
//     border-radius: 20px;
//   }
// `;

// const ButtonsRow = styled.div`
//   display: flex;
//   margin-left: 30px;
//   text-align: center;
//   gap: 10px;
//   margin-top: 50px;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const PrimaryButton = styled.div`
//   width: 200px;
//   height: 50px;
//   background-color: white;
//   padding-top: 12px;
//   border-radius: 12px;
//   color: #ff5d06;
//   box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.744);
//   transition: 0.4s;

//   &:hover {
//     box-shadow: 0px 4px 12px rgba(108, 3, 3, 0.744);
//   }

//   @media screen and (max-width: 480px) {
//     width: 120px;
//     height: 45px;
//     font-size: 0.9rem;
//   }
// `;

// const SecondaryButton = styled.div`
//   width: 200px;
//   height: 50px;
//   border: 2px solid white;
//   padding-top: 12px;
//   border-radius: 12px;
//   color: white;
//   box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.744);
//   transition: 0.4s;

//   &:hover {
//     box-shadow: 0px 4px 12px rgba(108, 3, 3, 0.744);
//   }

//   @media screen and (max-width: 480px) {
//     width: 120px;
//     height: 45px;
//     font-size: 0.9rem;
//   }
// `;

// const ArrowImage = styled.img`
//   height: 80px;
//   margin-top: -20px;
//   margin-left: 20px;

//   @media screen and (max-width: 720px) {
//     height: 70px;
//     margin-top: -90px;
//     margin-left: -70px;
//   }

//   @media screen and (max-width: 480px) {
//     height: 50px;
//     margin-top: -50px;
//     margin-left: -20px;
//   }
// `;

// const SocialsRow = styled.div`
//   width: 410px;

//   @media screen and (max-width: 480px) {
//     width: 310px;
//   }
// `;

// const SocialLink = styled.a`
//   text-decoration: none;
// `;

// const IconCircle = styled.div`
//   transition: 0.4s;
//   background-color: #1a2e35;
//   height: 50px;
//   width: 50px;
//   padding: 10px;
//   border-radius: 50%;
//   box-shadow: 0px 1px 2px rgba(8, 6, 0, 0.409),
//     0px 2px 4px rgba(0, 0, 0, 0.395),
//     0px 4px 8px rgba(0, 0, 0, 0.258),
//     0px 8px 16px rgba(8, 4, 0, 0.422);
//   cursor: pointer;

//   &:hover {
//     transform: scale(0.9);
//   }

//   @media screen and (max-width: 480px) {
//     height: 50px;
//     width: 50px;
//     padding: 10px;
//   }
// `;

// function Hero() {
//   return (
//     <>
//       <div className="screenSize">
//         <Parallax speed={0}>
//           <div className="main-gradient left-0 bottom-full" />
//         </Parallax>
//         <Parallax speed={-5}>
//           <div className="main-gradient right-0 top-20" />
//         </Parallax>
//       </div>
//       <HeroSection id="home" name="home">
//         <Description>
//           <HelloText
//             className="helloText font-semibold text-lg my-1"
//             style={{ animation: "Text-opacity 1s 0.2s both" }}
//           >
//             <GradientText>Hello There !</GradientText>
//           </HelloText>
//           <Name
//             className="Name text-3xl"
//             style={{ animation: "Text-opacity 1.5s 0.4s both" }}
//           >
//             I'm Mohd Hadi
//           </Name>
//           <FrontendTitle
//             className="frontendDev text-5xl font-medium"
//             style={{ animation: "Text-opacity 1.5s 0.6s both" }}
//           >
//             <GradientText>Frontend Developer</GradientText>
//           </FrontendTitle>
//           <Paragraph
//             className="para text-sm"
//             style={{ animation: "Text-opacity 2.5s 0.8s ease-in-out both" }}
//           >
//             I like building new things and turn visions into vibrant code as a
//             frontend wizard. I worked on many projects as a developer using the
//             most recent technologies.
//           </Paragraph>
//         </Description>
//         <ImageWrapper>
//           <ProfileImage src={profileImg} alt="Profile" />
//         </ImageWrapper>
//       </HeroSection>
//       <ButtonsRow>
//         <a
//           href="https://drive.google.com/file/d/1VogSVMCa0Qw3FxgZU7ZxQmNVELMyCXFK/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <PrimaryButton
//             style={{ animation: "Text-opacity 2.5s 1.2s ease-in-out both" }}
//           >
//             Download CV
//           </PrimaryButton>
//         </a>

//         <a href="mailto: hadi.88923@gmail.com">
//           <SecondaryButton
//             style={{ animation: "Text-opacity 2.5s 1.5s ease-in-out both" }}
//           >
//             Hire Me
//           </SecondaryButton>
//         </a>
//         <ArrowImage src={Arrow} alt="Arrow" />
//       </ButtonsRow>
//       <SocialsRow className="mx-8 my-10 flex gap-6 justify-center">
//         <SocialLink
//           style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }}
//           href="mailto: hadi.88923@gmail.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <IconCircle>
//             <svg
//               stroke="#ff7a2c"
//               fill="#ce6629f5"
//               strokeWidth="0"
//               viewBox="0 0 24 24"
//               className="text-2xl md:text-3xl"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
//             </svg>
//           </IconCircle>
//         </SocialLink>
//         <SocialLink
//           style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }}
//           href="https://github.com/mohdhadi01/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <IconCircle>
//             <svg
//               stroke="#ff7a2c"
//               fill="#ce6629f5"
//               strokeWidth="0"
//               viewBox="0 0 1024 1024"
//               className="text-2xl md:text-3xl"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
//             </svg>
//           </IconCircle>
//         </SocialLink>
//         <SocialLink
//           style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }}
//           href="https://www.linkedin.com/in/mohd-hadi-5a4638226/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <IconCircle>
//             <svg
//               stroke="#ff7a2c"
//               fill="#ce6629f5"
//               strokeWidth="0"
//               viewBox="0 0 448 512"
//               className="text-2xl md:text-3xl"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
//             </svg>
//           </IconCircle>
//         </SocialLink>
//         <SocialLink
//           style={{ animation: "scale-zoom 1.5s 1s ease-in-out both" }}
//           href="https://twitter.com/mohdhadi01/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <IconCircle>
//             <img src={Twitter} alt="Twitter" />
//           </IconCircle>
//         </SocialLink>
//       </SocialsRow>
//     </>
//   );
// }

// export default Hero;


  // import React, { useRef, useState } from "react";
  // import styled from "styled-components";
  // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

  // // Assets
  // import profileImg from "../Assets/edited_dp-ast6yqVUK-transformed.jpg";
  // import reactNative from "../Assets/header_logo.svg";
  // import typescript from "../Assets/Skills/typescript-icon.png";
  // import ReactIcon from "../Assets/Skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";

  // // --- BACKGROUND & LAYOUT ---

  // const HeroWrapper = styled.section`
  //   position: relative;
  //   min-height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   overflow: hidden;
  //   font-family: "Rajdhani", sans-serif;
  //   background-color: transparent;
  // `;

  // // A massive, slow-breathing gradient orb right in the center
  // const CenterSpotlight = styled(motion.div)`
  //   position: absolute;
  //   top: 40%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   width: 60vw;
  //   height: 60vw;
  //   max-width: 800px;
  //   max-height: 800px;
  //   border-radius: 50%;
  //   background: radial-gradient(circle, rgba(251, 124, 20, 0.15) 0%, rgba(166, 73, 65, 0.05) 50%, transparent 70%);
  //   filter: blur(80px);
  //   z-index: 0;
  //   pointer-events: none;
  // `;

  // // Subtle futuristic grid
  // const GridOverlay = styled.div`
  //   position: absolute;
  //   inset: 0;
  //   background-image: 
  //     linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
  //     linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  //   background-size: 40px 40px;
  //   mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
  //   -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
  //   z-index: 0;
  //   pointer-events: none;
  // `;

  // const ContentZIndex = styled.div`
  //   position: relative;
  //   z-index: 2;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   text-align: center;
  //   width: 100%;
  // `;

  // // --- STATUS PILL ---

  // const StatusPill = styled(motion.div)`
  //   display: flex;
  //   align-items: center;
  //   gap: 10px;
  //   background: rgba(255, 255, 255, 0.03);
  //   backdrop-filter: blur(10px);
  //   border: 1px solid rgba(255, 255, 255, 0.1);
  //   padding: 8px 20px;
  //   border-radius: 100px;
  //   margin-bottom: 30px;
  //   box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  // `;

  // const PulsingDot = styled(motion.div)`
  //   width: 10px;
  //   height: 10px;
  //   border-radius: 50%;
  //   background: #10b981; /* Emerald Green */
  //   box-shadow: 0 0 10px #10b981, 0 0 20px #10b981;
  // `;

  // const StatusText = styled.span`
  //   color: #a0aec0;
  //   font-size: 14px;
  //   font-weight: 600;
  //   letter-spacing: 1px;
  //   text-transform: uppercase;
  // `;

  // // --- TYPOGRAPHY ---

  // const HugeName = styled(motion.h1)`
  //   font-size: clamp(4rem, 8vw, 7rem);
  //   font-weight: 800;
  //   margin: 0;
  //   line-height: 1;
  //   letter-spacing: -2px;
  //   color: #ffffff;
  //   text-shadow: 0 10px 30px rgba(0,0,0,0.5);
  // `;

  // const Subtitle = styled(motion.h2)`
  //   font-size: clamp(1.2rem, 3vw, 2rem);
  //   font-weight: 500;
  //   margin-top: 10px;
  //   margin-bottom: 40px;
  //   letter-spacing: 8px;
  //   text-transform: uppercase;
  //   background: linear-gradient(to right, #ffffff 20%, #ffcc99 50%, #fb7c14 90%);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   color: transparent;
  // `;

  // const BioText = styled(motion.p)`
  //   max-width: 600px;
  //   color: #8b949e;
  //   font-size: 18px;
  //   line-height: 1.6;
  //   margin-bottom: 50px;
  //   padding: 0 20px;
  // `;

  // // --- THE GLOWING ORBIT IMAGE ---

  // const ImageWrapper = styled(motion.div)`
  //   position: relative;
  //   width: 180px;
  //   height: 180px;
  //   margin-bottom: 30px;
  //   border-radius: 50%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;

  //   @media (max-width: 600px) {
  //     width: 140px;
  //     height: 140px;
  //   }
  // `;

  // const RotatingBorder = styled(motion.div)`
  //   position: absolute;
  //   inset: -4px;
  //   border-radius: 50%;
  //   background: conic-gradient(from 0deg, transparent 0%, transparent 60%, #fb7c14 80%, #ffffff 100%);
  //   z-index: 0;
  // `;

  // const InnerCircle = styled.div`
  //   position: absolute;
  //   inset: 2px;
  //   background: #0d0f12;
  //   border-radius: 50%;
  //   z-index: 1;
  // `;

  // const ProfilePic = styled.img`
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   object-fit: cover;
  //   z-index: 2;
  //   padding: 6px; /* Creates the gap between image and glowing border */
  //   filter: contrast(1.1) saturate(1.1);
  // `;

  // // --- FLOATING TECH ORBS ---

  // const TechOrb = styled(motion.div)`
  //   position: absolute;
  //   width: 50px;
  //   height: 50px;
  //   background: rgba(20, 22, 25, 0.8);
  //   backdrop-filter: blur(10px);
  //   border: 1px solid rgba(255, 255, 255, 0.1);
  //   border-radius: 50%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  //   z-index: 3;

  //   img {
  //     width: 24px;
  //     height: 24px;
  //     object-fit: contain;
  //   }

  //   @media (max-width: 900px) {
  //     display: none; /* Hide on mobile to keep it clean */
  //   }
  // `;

  // // --- MAGNETIC BUTTON COMPONENT ---

  // // --- MAGNETIC BUTTON COMPONENTS ---

  // const ButtonsRow = styled(motion.div)`
  //   display: flex;
  //   gap: 10px;
  //   justify-content: center;
  //   flex-wrap: wrap;
  // `;

  // const MagneticButtonWrapper = styled(motion.div)`
  //   position: relative;
  //   display: inline-block;
  //   padding: 15px; /* The invisible magnetic pull area */
  // `;

  // const StyledMagnetBtn = styled(motion.a)`
  //   /* If it's the primary button it's white, otherwise it's dark glass */
  //   background: ${(props) => props.$primary ? "#ffffff" : "rgba(255, 255, 255, 0.05)"};
  //   color: ${(props) => props.$primary ? "#000000" : "#ffffff"};
  //   border: 1px solid ${(props) => props.$primary ? "transparent" : "rgba(255, 255, 255, 0.2)"};
  //   backdrop-filter: blur(10px);
  //   font-weight: 700;
  //   font-size: 15px;
  //   letter-spacing: 1px;
  //   text-transform: uppercase;
  //   padding: 16px 36px;
  //   border-radius: 100px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   text-decoration: none;
  //   box-shadow: ${(props) => props.$primary ? "0 10px 30px rgba(255, 255, 255, 0.2)" : "none"};
  //   transition: all 0.3s ease;

  //   &:hover {
  //     box-shadow: 0 15px 40px rgba(251, 124, 20, 0.4);
  //     background: #fb7c14;
  //     color: #ffffff;
  //     border-color: #fb7c14;
  //   }
  // `;

  // const MagneticButton = ({ children, href, primary }) => {
  //   const ref = useRef(null);
  //   const [position, setPosition] = useState({ x: 0, y: 0 });

  //   const handleMouse = (e) => {
  //     const { clientX, clientY } = e;
  //     const { height, width, left, top } = ref.current.getBoundingClientRect();
  //     const middleX = clientX - (left + width / 2);
  //     const middleY = clientY - (top + height / 2);
  //     // Move the button towards the mouse!
  //     setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  //   };

  //   const reset = () => {
  //     setPosition({ x: 0, y: 0 });
  //   };

  //   const { x, y } = position;

  //   return (
  //     <MagneticButtonWrapper
  //       ref={ref}
  //       onMouseMove={handleMouse}
  //       onMouseLeave={reset}
  //       animate={{ x, y }}
  //       transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
  //     >
  //       <StyledMagnetBtn href={href} $primary={primary} target="_blank" rel="noopener noreferrer">
  //         {children}
  //       </StyledMagnetBtn>
  //     </MagneticButtonWrapper>
  //   );
  // };
  // // --- MAIN HERO COMPONENT ---

  // function Hero() {
  //   // Parallax setup for floating orbs
  //   const mouseX = useMotionValue(0);
  //   const mouseY = useMotionValue(0);
  //   const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  //   const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  //   const handleMouseMove = (e) => {
  //     const { innerWidth, innerHeight } = window;
  //     mouseX.set(e.clientX - innerWidth / 2);
  //     mouseY.set(e.clientY - innerHeight / 2);
  //   };

  //   return (
  //     <HeroWrapper id="home" onMouseMove={handleMouseMove}>
  //       <GridOverlay />
        
  //       <CenterSpotlight 
  //         animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
  //         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  //       />

  //       <ContentZIndex>
          
  //         {/* Entrance Animations Stagger */}
  //         <motion.div
  //           initial="hidden"
  //           animate="visible"
  //           variants={{
  //             hidden: { opacity: 0 },
  //             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  //           }}
  //           style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  //         >
  //           {/* Status Pill */}
  //           <StatusPill variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
  //             <PulsingDot 
  //               animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} 
  //               transition={{ duration: 2, repeat: Infinity }}
  //             />
  //             <StatusText>Available for work</StatusText>
  //           </StatusPill>

  //           {/* Floating Orbit Image */}
  //           <ImageWrapper variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}>
  //             <RotatingBorder 
  //               animate={{ rotate: 360 }}
  //               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
  //             />
  //             <InnerCircle />
  //             <ProfilePic src={profileImg} alt="Mohd Hadi" />

  //             {/* Parallax Floating Tech Orbs */}
  //             <TechOrb 
  //               style={{ top: "-10px", left: "-40px", x: useTransform(springX, value => value * 0.05), y: useTransform(springY, value => value * 0.05) }}
  //               animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
  //             >
  //               <img src={reactNative} alt="React Native" />
  //             </TechOrb>
              
  //             <TechOrb 
  //               style={{ bottom: "20px", right: "-50px", x: useTransform(springX, value => value * -0.05), y: useTransform(springY, value => value * -0.05) }}
  //               animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}
  //             >
  //               <img src={typescript} alt="TypeScript" />
  //             </TechOrb>

  //             <TechOrb 
  //               style={{ top: "80px", left: "-70px", x: useTransform(springX, value => value * 0.08), y: useTransform(springY, value => value * -0.08) }}
  //               animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity }}
  //             >
  //               <img src={ReactIcon} alt="React" />
  //             </TechOrb>
  //           </ImageWrapper>

  //           {/* Typography */}
  //           <HugeName variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
  //             MOHD HADI
  //           </HugeName>
            
  //           <Subtitle variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
  //             Software Engineer
  //           </Subtitle>

  //           <BioText variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
  //             Building scalable, cross-platform mobile and web applications. <br/>
  //             Proven track record of owning features from architecture to production.
  //           </BioText>

  //           {/* Magnetic Action */}
  //           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
  //           {/* Magnetic Actions */}
  //           <ButtonsRow variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              
  //             <MagneticButton 
  //               primary={true} 
  //               href="https://drive.google.com/file/d/1VogSVMCa0Qw3FxgZU7ZxQmNVELMyCXFK/view?usp=sharing"
  //             >
  //               View Resume
  //             </MagneticButton>

  //             <MagneticButton 
  //               primary={false} 
  //               href="mailto:hadi.88923@gmail.com"
  //             >
  //               Hire Me
  //             </MagneticButton>

  //           </ButtonsRow>
  //           </motion.div>

  //         </motion.div>
  //       </ContentZIndex>
  //     </HeroWrapper>
  //   );
  // }

  // export default Hero;

  import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

// Assets (Ensure paths match your project)
import profileImg from "../Assets/edited_dp-ast6yqVUK-transformed.jpg";
import reactNative from "../Assets/header_logo.svg";
import typescript from "../Assets/Skills/typescript-icon.png";
import ReactIcon from "../Assets/Skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";

// --- BACKGROUND & LAYOUT ---

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Rajdhani", sans-serif;
  background-color: transparent;
`;

// Dynamic Spotlight that follows the mouse
const MouseSpotlight = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
  z-index: 1;
  pointer-events: none;
`;

const ContentZIndex = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 5vh;
`;

// --- STATUS PILL ---

const StatusPill = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 24px;
  border-radius: 100px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1);
`;

const PulsingDot = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981; 
  box-shadow: 0 0 12px #10b981, 0 0 24px #10b981;
`;

const StatusText = styled.span`
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

// --- THE NEW 3D AVATAR SYSTEM ---

const ImagePerspective = styled.div`
  perspective: 1200px;
  margin-bottom: 40px;
`;

// Container for the image, orbs, and badge to keep them grouped in 3D space
const AvatarSystemContainer = styled(motion.div)`
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;

  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
`;

// The main image container (completely separate from the orbs so they don't clip)
const ImageCore = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(20px); /* Lifts image off the background */
`;

const RotatingNeonBorder = styled(motion.div)`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 0%, transparent 40%, #fb7c14 80%, #ffffff 100%);
  z-index: 0;
  filter: drop-shadow(0 0 15px rgba(251, 124, 20, 0.4));
`;

// A futuristic dashed HUD ring orbiting outside the image
const TechHudRing = styled(motion.div)`
  position: absolute;
  inset: -25px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  z-index: 1;
  pointer-events: none;
  transform: translateZ(10px);
`;

const InnerCircle = styled.div`
  position: absolute;
  inset: 4px;
  background: #0d0f12;
  border-radius: 50%;
  z-index: 1;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
  padding: 8px; 
  filter: contrast(1.1) saturate(1.1);
`;

// THE NEW YOE BADGE
const ExperienceBadge = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  right: -15px;
  background: linear-gradient(135deg, #fb7c14 0%, #d85b00 100%);
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(251, 124, 20, 0.4);
  border: 4px solid #050505; /* Creates a cutout effect against the image */
  z-index: 10;
  transform: translateZ(40px) rotate(-10deg); /* Pops way out in 3D */
  pointer-events: none;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 16px;
    bottom: -5px;
    right: -10px;
  }
`;

// Floating Orbs are absolute to the SYSTEM, ensuring they NEVER get clipped
const TechOrb = styled(motion.div)`
  position: absolute;
  width: 55px;
  height: 55px;
  background: rgba(20, 22, 25, 0.85);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3);
  z-index: 5;
  transform-style: preserve-3d;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.5));
    transform: translateZ(10px);
  }

  @media (max-width: 900px) { display: none; }
`;

// --- TYPOGRAPHY ---

const HugeName = styled(motion.h1)`
  font-size: clamp(4rem, 9vw, 8rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  letter-spacing: -3px;
  color: #ffffff;
  text-shadow: 0 10px 40px rgba(0,0,0,0.6);
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 2.2rem);
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 30px;
  letter-spacing: 10px;
  text-transform: uppercase;
  background: linear-gradient(to right, #ffffff 10%, #ffcc99 50%, #fb7c14 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0px 4px 10px rgba(251, 124, 20, 0.3));
`;

const BioText = styled(motion.p)`
  max-width: 650px;
  color: #8b949e;
  font-size: 19px;
  line-height: 1.6;
  margin-bottom: 50px;
  padding: 0 20px;
`;

// --- MAGNETIC BUTTONS ---

const ButtonsRow = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const MagneticButtonWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
  padding: 20px; 
`;

const StyledMagnetBtn = styled(motion.a)`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.$primary ? "#ffffff" : "rgba(255, 255, 255, 0.03)"};
  color: ${(props) => props.$primary ? "#000000" : "#ffffff"};
  border: 1px solid ${(props) => props.$primary ? "transparent" : "rgba(255, 255, 255, 0.15)"};
  backdrop-filter: blur(10px);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 18px 40px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: ${(props) => props.$primary ? "0 10px 30px rgba(255, 255, 255, 0.2)" : "0 10px 30px rgba(0,0,0,0.3)"};
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  /* The Luxury Shine Sweep Effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg);
    transition: left 0.5s ease;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(251, 124, 20, 0.5);
    background: #fb7c14;
    color: #ffffff;
    border-color: #fb7c14;
    
    &::after { left: 150%; }
  }
`;

const MagneticButton = ({ children, href, primary }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <MagneticButtonWrapper
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <StyledMagnetBtn href={href} $primary={primary} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledMagnetBtn>
    </MagneticButtonWrapper>
  );
};

// --- PARTICLES ---

const ParticlesContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: #fb7c14;
  border-radius: 50%;
  filter: blur(1px);
`;

const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    duration: 10 + Math.random() * 15,
    delay: Math.random() * 5,
  }));

  return (
    <ParticlesContainer>
      {particles.map((p) => (
        <Particle
          key={p.id}
          style={{ left: `${p.x}vw`, bottom: `-10vh` }}
          animate={{ y: [0, -1200], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </ParticlesContainer>
  );
};

// --- MAIN HERO COMPONENT ---

function Hero() {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  
  const springConfig = { stiffness: 50, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Tilt mapping for the whole Avatar cluster
  const rotateX = useTransform(smoothY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], ["15deg", "-15deg"]);
  const rotateY = useTransform(smoothX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], ["-15deg", "15deg"]);

  const spotlightGradient = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(251, 124, 20, 0.12), transparent 80%)`;

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <HeroWrapper id="home" onMouseMove={handleMouseMove}>
      <GridOverlay />
      <MouseSpotlight style={{ background: spotlightGradient }} />
      <FloatingParticles />

      <ContentZIndex>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* Status Pill */}
          <StatusPill variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
            <PulsingDot animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <StatusText>Available for work</StatusText>
          </StatusPill>

          {/* THE FIXED 3D AVATAR SYSTEM */}
          <ImagePerspective>
            <AvatarSystemContainer 
              style={{ rotateX, rotateY }} // Entire system tilts in 3D towards the mouse
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } } }}
            >
              
              {/* HUD Ring orbiting outside */}
              <TechHudRing animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

              {/* Core Image Container */}
              <ImageCore>
                <RotatingNeonBorder animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
                <InnerCircle />
                <ProfilePic src={profileImg} alt="Mohd Hadi" />
              </ImageCore>

              {/* The "2+ YOE" Badge with an entrance float */}
              <ExperienceBadge
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 150, delay: 1 }}
              >
                2+ YOE
              </ExperienceBadge>

              {/* Parallax Orbs - Absolutely positioned OUTSIDE the image core */}
              <TechOrb 
                style={{ top: "0px", left: "-30px", x: useTransform(smoothX, v => (v - window.innerWidth / 2) * 0.04), y: useTransform(smoothY, v => (v - window.innerHeight / 2) * 0.04), translateZ: 30 }}
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              >
                <img src={reactNative} alt="React Native" />
              </TechOrb>
              
              <TechOrb 
                style={{ bottom: "10px", left: "-35px", x: useTransform(smoothX, v => (v - window.innerWidth / 2) * -0.05), y: useTransform(smoothY, v => (v - window.innerHeight / 2) * -0.05), translateZ: 40 }}
                animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity }}
              >
                <img src={typescript} alt="TypeScript" />
              </TechOrb>

              <TechOrb 
                style={{ top: "120px", right: "-35px", x: useTransform(smoothX, v => (v - window.innerWidth / 2) * 0.06), y: useTransform(smoothY, v => (v - window.innerHeight / 2) * -0.06), translateZ: 25 }}
                animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity }}
              >
                <img src={ReactIcon} alt="React" />
              </TechOrb>
              
            </AvatarSystemContainer>
          </ImagePerspective>

          {/* Typography */}
          <HugeName variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } } }}>
            MOHD HADI
          </HugeName>
          
          <Subtitle variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Software Engineer
          </Subtitle>

          <BioText variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Frontend-focused Software Developer building scalable, cross-platform mobile and web applications. <br/>
            Proven track record of owning features from architecture to production.
          </BioText>

          {/* Magnetic Actions */}
          <ButtonsRow variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <MagneticButton primary={true} href="https://drive.google.com/file/d/1VogSVMCa0Qw3FxgZU7ZxQmNVELMyCXFK/view?usp=sharing">
              View Resume
            </MagneticButton>
            <MagneticButton primary={false} href="mailto:hadi.88923@gmail.com">
              Hire Me
            </MagneticButton>
          </ButtonsRow>

        </motion.div>
      </ContentZIndex>
    </HeroWrapper>
  );
}

export default Hero;