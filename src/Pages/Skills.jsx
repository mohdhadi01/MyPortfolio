// // import React from "react";
// // import styled from "styled-components";
// // import photoshop from "../Assets/Skills/icons8-adobe-photoshop-96(1).png";
// // import CssIcon from "../Assets/Skills/icons8-css-96.png";
// // import Github from "../Assets/Skills/icons8-github-96.png";
// // import HtmlIcon from "../Assets/Skills/icons8-html-96.png";
// // import reactNative from "../Assets/header_logo.svg";
// // import JSIcon from "../Assets/Skills/icons8-javascript-96.png";
// // import Python from "../Assets/Skills/icons8-python-96.png";
// // import ReactIcon from "../Assets/Skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
// // import Redux from "../Assets/Skills/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png";
// // import Tailwind from "../Assets/Skills/icons8-tailwindcss-96.png";
// // import mongoDB from "../Assets/Skills/mongo-svgrepo-com.svg";
// // import Express from "../Assets/Skills/express-svgrepo-com.svg";
// // import NodeJs from "../Assets/Skills/node-js-svgrepo-com.svg";
// // import typescript from "../Assets/Skills/typescript-icon.png";
// // import materialUi from "../Assets/Skills/material-ui-icon.png";
// // import { Parallax } from "react-scroll-parallax";

// // const SkillsPage = styled.section`
// //   color: white;
// //   padding-top: 2.5rem; /* pt-10 */
// // `;

// // const SkillHeading = styled.h1``;

// // const SkillContainer = styled.div`
// //   position: relative;
// //   z-index: 999;
// // `;

// // const LineRow = styled.div`
// //   display: flex;
// //   align-items: center;
// // `;

// // const Line1 = styled(LineRow)`
// //   justify-content: space-around;

// //   @media screen and (max-width: 480px) {
// //     display: grid;
// //     grid-template-columns: repeat(3, 1fr);
// //     gap: 20px;
// //     width: 100vw;
// //     place-items: center;
// //     margin-top: -10px;
// //   }
// // `;

// // const Line2 = styled(LineRow)`
// //   justify-content: center;
// //   gap: 2rem; /* gap-8 */
// //   margin-top: 2.75rem; /* my-11 */
// //   margin-bottom: 2.75rem;

// //   @media screen and (max-width: 720px) {
// //     justify-content: space-around;
// //     gap: 0;
// //   }

// //   @media screen and (max-width: 480px) {
// //     display: grid;
// //     grid-template-columns: repeat(3, 1fr);
// //     gap: 20px;
// //     width: 100vw;
// //     place-items: center;
// //     margin-top: 20px;
// //   }
// // `;

// // const Line3 = styled(LineRow)`
// //   justify-content: space-around;

// //   @media screen and (max-width: 480px) {
// //     display: grid;
// //     grid-template-columns: repeat(3, 1fr);
// //     gap: 20px;
// //     width: 100vw;
// //     place-items: center;
// //     margin-top: -20px;
// //   }
// // `;

// // const SkillIcon = styled.div`
// //   height: 100px;
// //   width: 100px;
// //   background: linear-gradient(
// //     180deg,
// //     rgba(9, 9, 9, 0.443) 0%,
// //     rgba(192, 78, 17, 0.21) 100%
// //   );
// //   padding: 10px;
// //   box-shadow: 0px 1px 2px rgba(8, 6, 0, 0.5),
// //     0px 2px 4px rgba(0, 0, 0, 0.5),
// //     0px 4px 8px rgba(0, 0, 0, 0.5),
// //     0px 8px 16px rgba(8, 4, 0, 0.5);
// //   z-index: 2;
// //   border-radius: 10px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   font-family: monospace;
// //   font-size: 16px;
// //   font-weight: lighter;

// //   @media screen and (max-width: 720px) {
// //     height: 78px;
// //     width: 78px;
// //     font-size: 0.7rem;
// //   }
// // `;

// // const MidIconA = styled(SkillIcon)`
// //   @media screen and (max-width: 480px) {
// //     margin-left: 120%;
// //   }
// // `;

// // const MidIconB = styled(SkillIcon)`
// //   @media screen and (max-width: 480px) {
// //     margin-left: 120%;
// //   }
// // `;

// // const IconImage = styled.img`
// //   width: 50px;
// //   margin-bottom: 5px;

// //   @media screen and (max-width: 720px) {
// //     width: 30px;
// //     margin-bottom: 5px;
// //   }
// // `;

// // function Skills() {
// //   return (
// //     <>
// //       <SkillsPage name="skills">
// //         <div className="screenSize">
// //           <Parallax speed={-20}>
// //             <div className="main-gradient left-0 top-80" />
// //           </Parallax>
// //           <Parallax speed={-10}>
// //             <div className="main-gradient right-0 top-5" />
// //           </Parallax>
// //         </div>

// //         <SkillHeading className="gradientText SkillHeading text-4xl text-center  pb-20 font-medium mt-unit-4xl mb-unit-3xl">
// //           Skills
// //         </SkillHeading>

// //         <SkillContainer>
// //           <Line1>
// //             <SkillIcon>
// //               <IconImage src={typescript} alt="Typescript" />
// //               Typescript
// //             </SkillIcon>
// //             <SkillIcon>
// //               <IconImage src={ReactIcon} alt="React" />
// //               React
// //             </SkillIcon>
// //             <SkillIcon>
// //               <IconImage src={Redux} alt="Redux" />
// //               Redux
// //             </SkillIcon>
// //             <MidIconA>
// //               <IconImage src={JSIcon} alt="Javascript" />
// //               Javascript
// //             </MidIconA>
// //             <MidIconA>
// //               <IconImage src={reactNative} alt="React Native" />
// //               React Native
// //             </MidIconA>
// //           </Line1>

// //           <Line2>
// //             <SkillIcon>
// //               <IconImage src={Tailwind} alt="Tailwind" />
// //               Tailwind
// //             </SkillIcon>
// //             <SkillIcon>
// //               <IconImage src={Github} alt="Github" />
// //               Github
// //             </SkillIcon>
// //             <SkillIcon>
// //               <IconImage src={photoshop} alt="Photoshop" />
// //               Photoshop
// //             </SkillIcon>
// //             <MidIconA>
// //               <IconImage src={materialUi} alt="Material UI" />
// //               Materialui
// //             </MidIconA>
// //             <MidIconB>
// //               <IconImage src={Python} alt="Python" />
// //               Python
// //             </MidIconB>
// //           </Line2>

// //           <Line3>
// //             <SkillIcon>
// //               <IconImage src={CssIcon} alt="CSS" />
// //               CSS
// //             </SkillIcon>
// //             <SkillIcon>
// //               <IconImage src={HtmlIcon} alt="HTML" />
// //               HTML
// //             </SkillIcon>
// //             <SkillIcon>
// //               <IconImage src={NodeJs} alt="Node.js" />
// //               Node.js
// //             </SkillIcon>
// //             <MidIconA>
// //               <IconImage src={Express} alt="Express.js" />
// //               Express.js
// //             </MidIconA>
// //             <MidIconB>
// //               <IconImage src={mongoDB} alt="MongoDB" />
// //               MongoDB
// //             </MidIconB>
// //           </Line3>
// //         </SkillContainer>
// //       </SkillsPage>
// //     </>
// //   );
// // }

// // export default Skills;

// import React, { useRef } from "react";
// import styled from "styled-components";
// import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
// import { Parallax } from "react-scroll-parallax";

// // Assets
// import photoshop from "../Assets/Skills/icons8-adobe-photoshop-96(1).png";
// import CssIcon from "../Assets/Skills/icons8-css-96.png";
// import Github from "../Assets/Skills/icons8-github-96.png";
// import HtmlIcon from "../Assets/Skills/icons8-html-96.png";
// import reactNative from "../Assets/header_logo.svg";
// import JSIcon from "../Assets/Skills/icons8-javascript-96.png";
// import Python from "../Assets/Skills/icons8-python-96.png";
// import ReactIcon from "../Assets/Skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
// import Redux from "../Assets/Skills/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png";
// import Tailwind from "../Assets/Skills/icons8-tailwindcss-96.png";
// import mongoDB from "../Assets/Skills/mongo-svgrepo-com.svg";
// import Express from "../Assets/Skills/express-svgrepo-com.svg";
// import NodeJs from "../Assets/Skills/node-js-svgrepo-com.svg";
// import typescript from "../Assets/Skills/typescript-icon.png";
// import materialUi from "../Assets/Skills/material-ui-icon.png";

// // --- BACKGROUND & HEADING ---

// const SkillsPage = styled.section`
//   padding-top: 7rem;
//   padding-bottom: 10rem;
//   position: relative;
//   overflow: hidden;
//   font-family: "Rajdhani", sans-serif;
//   background-color: transparent; /* Blends seamlessly with your site */
// `;

// const ScreenSize = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   z-index: 0;
// `;

// const MainGradient = styled.div`
//   background-image: linear-gradient(500deg, rgba(166, 73, 65, 0.4), rgba(206, 153, 110, 0.4), rgba(251, 124, 20, 0.3));
//   position: absolute;
//   height: 400px;
//   width: 400px;
//   border-radius: 50%;
//   filter: blur(150px);
//   opacity: 0.5;

//   &.left { left: -5rem; top: 10rem; }
//   &.right { right: -5rem; top: 30rem; }
// `;

// const SectionTitle = styled.h1`
//   font-size: 3.8rem; 
//   text-align: center;
//   font-weight: 700;
//   margin-top: 2rem;
//   margin-bottom: 5rem;
//   position: relative;
//   z-index: 1;
//   letter-spacing: -1px;
// `;

// const GradientText = styled.span`
//   background: linear-gradient(135deg, #ffffff 0%, #fb7c14 50%, #e36600 100%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// `;

// // --- BENTO BOX GRID ---

// const ContentWrapper = styled.div`
//   max-width: 1100px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 20px;
//   position: relative;
//   z-index: 1;
// `;

// const BentoGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 24px;
//   width: 100%;

//   /* Responsive Stacking */
//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// // --- INDIVIDUAL BENTO CONTAINER ---

// const BentoBoxWrapper = styled(motion.div)`
//   position: relative;
//   background: #0d0f12;
//   border: 1px solid rgba(255, 255, 255, 0.05);
//   border-radius: 24px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   min-height: 280px;
//   box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  
//   /* Dynamic column spanning for layout variety */
//   grid-column: span ${(props) => props.$colSpan};

//   @media (max-width: 900px) {
//     /* If colSpan is 2, it takes full row on tablet. If 1, it takes half. */
//     grid-column: span ${(props) => (props.$colSpan === 2 ? 2 : 1)};
//   }
//   @media (max-width: 600px) {
//     grid-column: span 1 !important;
//   }

//   /* Futuristic Dot Matrix Background */
//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
//     background-size: 20px 20px;
//     z-index: 0;
//     mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
//     -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
//   }
// `;

// const MouseSpotlight = styled(motion.div)`
//   position: absolute;
//   inset: 0;
//   z-index: 0;
//   pointer-events: none;
// `;

// const BentoHeader = styled.div`
//   padding: 24px 24px 0 24px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   z-index: 2;
//   font-size: 13px;
//   font-weight: 700;
//   letter-spacing: 2px;
//   text-transform: uppercase;
//   color: #8b949e;
// `;

// const StatusDot = styled.div`
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   background: #fb7c14;
//   box-shadow: 0 0 10px #fb7c14;
// `;

// const PhysicsPlayground = styled.div`
//   position: relative;
//   flex-grow: 1;
//   padding: 24px;
//   display: flex;
//   flex-wrap: wrap;
//   align-content: center;
//   justify-content: center;
//   gap: 16px;
//   z-index: 2;
// `;

// // --- DRAGGABLE SKILL STYLES ---

// const getPadding = (format) => {
//   if (format === "icon") return "18px";
//   if (format === "large-pill") return "14px 28px";
//   return "10px 20px";
// };

// const getIconSize = (format) => {
//   if (format === "icon") return "46px";
//   if (format === "large-pill") return "28px";
//   return "22px";
// };

// const getFontSize = (format) => {
//   if (format === "large-pill") return "18px";
//   return "15px";
// };

// const SkillWrapper = styled(motion.div)`
//   background: rgba(20, 22, 24, 0.6);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
//   cursor: grab;
//   position: relative;

//   /* TOTALLY DIFFERENT SIZES & LAYOUTS BASED ON FORMAT */
//   padding: ${(props) => getPadding(props.$format)};
//   border-radius: ${(props) => props.$format === "icon" ? "20px" : "500px"};
  
//   transition: border-color 0.3s ease, background 0.3s ease;
  
//   &:hover {
//     border-color: ${(props) => props.$color};
//     background: rgba(255, 255, 255, 0.05);
//     box-shadow: 0 0 25px ${(props) => props.$color}40;
//   }
  
//   &:active {
//     cursor: grabbing;
//   }
// `;

// const SkillIconImg = styled.img`
//   width: ${(props) => getIconSize(props.$format)};
//   height: ${(props) => getIconSize(props.$format)};
//   object-fit: contain;
//   filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.4));
// `;

// const SkillName = styled.span`
//   font-size: ${(props) => getFontSize(props.$format)};
//   font-family: monospace; /* Gives it that Gen-Z hacker/dev vibe */
//   font-weight: 600;
//   color: #a0aec0;
//   letter-spacing: 0.5px;
//   transition: color 0.3s ease;

//   ${SkillWrapper}:hover & {
//     color: #ffffff;
//     text-shadow: 0 0 10px ${(props) => props.$color}80; /* Text neon glow */
//   }
// `;

// // --- PLAYABLE COMPONENTS ---

// const DraggableSkill = ({ skill, constraintsRef }) => {
//   return (
//     <SkillWrapper
//       $format={skill.format}
//       $color={skill.color}
//       drag
//       dragConstraints={constraintsRef}
//       dragElastic={0.2} // Satisfying rubber-band tension
//       dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }} // Bouncy return
//       whileHover={{ scale: 1.1, zIndex: 10 }}
//       whileDrag={{ scale: 1.2, zIndex: 50, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
//     >
//       <SkillIconImg src={skill.icon} alt={skill.name} $format={skill.format} />
//       {/* Hides text if it's meant to be just an Icon block */}
//       {skill.format !== "icon" && <SkillName $format={skill.format} $color={skill.color}>{skill.name}</SkillName>}
//     </SkillWrapper>
//   );
// };

// const PlayableBentoBox = ({ data }) => {
//   const constraintsRef = useRef(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left);
//     mouseY.set(e.clientY - rect.top);
//   };

//   return (
//     <BentoBoxWrapper 
//       $colSpan={data.colSpan} 
//       onMouseMove={handleMouseMove}
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
//       }}
//     >
//       {/* Dynamic Flashlight Effect */}
//       <MouseSpotlight 
//         style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(251, 124, 20, 0.12), transparent 80%)` }} 
//       />
      
//       <BentoHeader>
//         <StatusDot /> {data.title}
//       </BentoHeader>

//       {/* Constraints Ref ensures skills bounce off the walls of this specific box */}
//       <PhysicsPlayground ref={constraintsRef}>
//         {data.skills.map((skill, i) => (
//           <DraggableSkill key={i} skill={skill} constraintsRef={constraintsRef} />
//         ))}
//       </PhysicsPlayground>
//     </BentoBoxWrapper>
//   );
// };

// // --- STRUCTURED BENTO DATA ---
// // Format options: "large-pill", "pill", "icon" (Creates the totally different sizes & layouts)

// const bentoData = [
//   {
//     id: "frontend",
//     title: "Client-Side Engineering",
//     colSpan: 2, /* Takes up 2 columns (Wide box) */
//     skills: [
//       { name: "React Native", icon: reactNative, color: "#61dafb", format: "large-pill" },
//       { name: "React.js", icon: ReactIcon, color: "#61dafb", format: "large-pill" },
//       { name: "TypeScript", icon: typescript, color: "#3178c6", format: "large-pill" },
//       { name: "JavaScript", icon: JSIcon, color: "#f7df1e", format: "icon" },
//       { name: "Redux", icon: Redux, color: "#764abc", format: "pill" },
//     ]
//   },
//   {
//     id: "backend",
//     title: "Server & Database",
//     colSpan: 1, /* Takes up 1 column (Tall box) */
//     skills: [
//       { name: "Node.js", icon: NodeJs, color: "#5fa04e", format: "large-pill" },
//       { name: "Express.js", icon: Express, color: "#808080", format: "pill" },
//       { name: "MongoDB", icon: mongoDB, color: "#47a248", format: "icon" },
//     ]
//   },
//   {
//     id: "ui",
//     title: "Styling & UI",
//     colSpan: 1, 
//     skills: [
//       { name: "Tailwind CSS", icon: Tailwind, color: "#06b6d4", format: "large-pill" },
//       { name: "Material UI", icon: materialUi, color: "#007fff", format: "pill" },
//       { name: "CSS3", icon: CssIcon, color: "#1572b6", format: "icon" },
//       { name: "HTML5", icon: HtmlIcon, color: "#e34f26", format: "pill" },
//     ]
//   },
//   {
//     id: "tools",
//     title: "Tools & Deployment",
//     colSpan: 2, 
//     skills: [
//       { name: "GitHub", icon: Github, color: "#ffffff", format: "large-pill" },
//       { name: "Python", icon: Python, color: "#3776ab", format: "pill" },
//       { name: "Photoshop", icon: photoshop, color: "#31a8ff", format: "icon" },
//     ]
//   }
// ];

// function Skills() {
//   return (
//     <SkillsPage id="skills">
//       <ScreenSize>
//         <Parallax speed={-15}><MainGradient className="left" /></Parallax>
//         <Parallax speed={-10}><MainGradient className="right" /></Parallax>
//       </ScreenSize>

//       <ContentWrapper>
//         <SectionTitle>
//           <GradientText>Technical Arsenal</GradientText>
//         </SectionTitle>

//         <BentoGrid
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ staggerChildren: 0.1 }}
//         >
//           {bentoData.map((box, index) => (
//             <PlayableBentoBox key={index} data={box} />
//           ))}
//         </BentoGrid>
//       </ContentWrapper>
//     </SkillsPage>
//   );
// }

// export default Skills;

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

// Assets
import photoshop from "../Assets/Skills/icons8-adobe-photoshop-96(1).png";
import CssIcon from "../Assets/Skills/icons8-css-96.png";
import Github from "../Assets/Skills/icons8-github-96.png";
import HtmlIcon from "../Assets/Skills/icons8-html-96.png";
import reactNative from "../Assets/header_logo.svg";
import JSIcon from "../Assets/Skills/icons8-javascript-96.png";
import Python from "../Assets/Skills/icons8-python-96.png";
import ReactIcon from "../Assets/Skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
import Redux from "../Assets/Skills/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png";
import Tailwind from "../Assets/Skills/icons8-tailwindcss-96.png";
import mongoDB from "../Assets/Skills/mongo-svgrepo-com.svg";
import Express from "../Assets/Skills/express-svgrepo-com.svg";
import NodeJs from "../Assets/Skills/node-js-svgrepo-com.svg";
import typescript from "../Assets/Skills/typescript-icon.png";
import materialUi from "../Assets/Skills/material-ui-icon.png";

// --- BACKGROUND & HEADING STYLES ---

const SkillsPage = styled.section`
  padding-top: 3rem;
  padding-bottom: 7rem;
  position: relative;
  overflow: hidden;
  font-family: "Rajdhani", sans-serif;
  background-color: transparent;
`;

const ScreenSize = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const MainGradient = styled.div`
  background-image: linear-gradient(500deg, #a64941, #ce996e 47.71%, #ff9328 0, #6f71b6d8, #3b94a5, #dc4f1c);
  position: absolute;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  filter: blur(160px);
  opacity: 0.2;

  &.left { left: -5rem; top: 10rem; }
  &.right { right: -5rem; top: 30rem; }
`;

const SectionTitle = styled.h1`
  font-size: 2.8rem; /* Slightly scaled down for elegance */
  text-align: center;
  font-weight: 400; /* Dropped from 700 (bold) to 400 (regular) for a sleeker look */
  text-transform: uppercase; /* Gives it a premium, cinematic feel */
  letter-spacing: 6px; /* Wide letter spacing is the secret to "fancy" typography */
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

// --- CLUSTER LAYOUT ---

const ContentWrapper = styled.div`
  max-width: 950px; /* Forces a nice, tight, centered cluster */
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const ClusterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

// --- HIGH-END ANIMATED PILL COMPONENTS ---

const PillPerspectiveBox = styled(motion.div)`
  perspective: 1200px;
  position: relative;
  z-index: 1;
  
  /* Pops to the front when interacted with */
  &:hover, &:active {
    z-index: 50;
  }
`;

const PillOuterBorder = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05); /* Very faint border initially */
  padding: 1px; /* 1px border thickness */
  border-radius: 100px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.4s ease, background 0.4s ease;

  ${PillPerspectiveBox}:hover & {
    /* The outer border glows with the brand color on hover */
    background: ${(props) => props.$brandColor};
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px ${(props) => props.$brandColor}40;
  }
`;

const PillInnerGlass = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(15, 17, 20, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 100px;
  padding: 12px 30px;
  cursor: grab;
  overflow: hidden;
  transform-style: preserve-3d;

  &:active {
    cursor: grabbing;
    background: rgba(20, 22, 26, 0.95);
  }

  @media (max-width: 600px) {
    padding: 10px 24px;
    gap: 10px;
  }
`;

// The holographic spotlight that tracks the mouse inside the pill
const HoverSpotlight = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const SkillIconImg = styled(motion.img)`
  width: 28px;
  height: 28px;
  object-fit: contain;
  transform: translateZ(30px); /* 3D pop off the glass */
  filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.4));
  z-index: 2;

  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
  }
`;

const SkillName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #a0aec0;
  letter-spacing: 0.5px;
  transform: translateZ(20px); /* 3D pop off the glass */
  z-index: 2;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  ${PillPerspectiveBox}:hover & {
    color: #ffffff;
    text-shadow: 0 0 12px ${(props) => props.$brandColor}80;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

// --- INTERACTIVE PHYSICS LOGIC ---

const PlayableSkillPill = ({ skill }) => {
  const ref = useRef(null);
  
  // Randomize the float animation so they look organic
  const [randomDelay] = useState(Math.random() * -2); // Negative delay starts animation immediately at different phases
  const [randomDuration] = useState(3 + Math.random() * 2);

  // 3D Tilt Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-14deg", "14deg"]);

  // Neon Spotlight Setup
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const spotlightTemplate = useMotionTemplate`radial-gradient(120px circle at ${glowX}px ${glowY}px, ${skill.color}50, transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Tilt Math
    mouseX.set((e.clientX - rect.left) / width - 0.5);
    mouseY.set((e.clientY - rect.top) / height - 0.5);

    // Spotlight Math
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <PillPerspectiveBox
      // 1. Organic Levitation (Breathing effect)
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: randomDelay,
      }}
    >
      <PillOuterBorder
        $brandColor={skill.color}
        style={{ rotateX, rotateY }}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        
        // 2. Drag Physics
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.4}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }} // Very snappy rubber band
        
        // 3. Hover / Tap Gestures
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 1.2, rotate: 3 }} // Enlarges and twists when dragged
        whileTap={{ scale: 0.95 }}
      >
        <PillInnerGlass>
          <HoverSpotlight style={{ background: spotlightTemplate }} />
          
          <SkillIconImg 
            src={skill.icon} 
            alt={skill.name} 
            // The icon does a little wiggle jump when hovered!
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 5, 0], y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          
          <SkillName $brandColor={skill.color}>{skill.name}</SkillName>
        </PillInnerGlass>
      </PillOuterBorder>
    </PillPerspectiveBox>
  );
};

// --- DATA ---

const skillsData = [
  { name: "React Native", icon: reactNative, color: "#61dafb" },
  { name: "React.js", icon: ReactIcon, color: "#61dafb" },
  { name: "TypeScript", icon: typescript, color: "#3178c6" },
  { name: "JavaScript", icon: JSIcon, color: "#f7df1e" },
  { name: "Node.js", icon: NodeJs, color: "#5fa04e" },
  { name: "Tailwind CSS", icon: Tailwind, color: "#06b6d4" },
  { name: "Redux", icon: Redux, color: "#764abc" },
  { name: "Express.js", icon: Express, color: "#808080" },
  { name: "MongoDB", icon: mongoDB, color: "#47a248" },
  { name: "GitHub", icon: Github, color: "#ffffff" },
  { name: "HTML5", icon: HtmlIcon, color: "#e34f26" },
  { name: "CSS3", icon: CssIcon, color: "#1572b6" },
  { name: "Python", icon: Python, color: "#3776ab" },
  { name: "Material UI", icon: materialUi, color: "#007fff" },
  { name: "Photoshop", icon: photoshop, color: "#31a8ff" },
];

function Skills() {
  return (
    <SkillsPage id="skills">
      <ScreenSize>
        <Parallax speed={-15}><MainGradient className="left" /></Parallax>
        <Parallax speed={-10}><MainGradient className="right" /></Parallax>
      </ScreenSize>

      <ContentWrapper>
        {/* Animated Entrance for the Heading */}
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientText>Skills & Expertise</GradientText>
        </SectionTitle>

        <ClusterContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 } // Fast waterfall stagger
            }
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={{
                // Matrix "Twist and Pop" entrance
                hidden: { opacity: 0, y: 40, scale: 0.6, rotate: -10 },
                visible: { 
                  opacity: 1, y: 0, scale: 1, rotate: 0, 
                  transition: { type: "spring", stiffness: 120, damping: 12 } 
                }
              }}
            >
              <PlayableSkillPill skill={skill} />
            </motion.div>
          ))}
        </ClusterContainer>
      </ContentWrapper>
    </SkillsPage>
  );
}

export default Skills;