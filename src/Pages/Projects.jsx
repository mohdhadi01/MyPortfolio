// import React, { useRef } from "react";
// import styled from "styled-components";
// import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

// // Assets
// import Cinematrix from "../Assets/Projects SS/Cinematrix.jpg";
// import CinematrixBackend from "../Assets/Projects SS/cinem-backend.png";
// import NewsChron from "../Assets/Projects SS/NEWSCHRON.jpg";
// import Notes from "../Assets/Projects SS/Notes.png";
// import LiveTranslator from "../Assets/Projects SS/LiveTranslation.png";
// import Portfolio from "../Assets/Projects SS/Portfolio SS.png";
// import Github from "../Assets/Skills/icons8-github-96.png";
// import LinkImg from "../Assets/LinkImg.png";

// // --- STYLED COMPONENTS (Matched to Experience.js) ---

// const MainDiv = styled.div`
//   padding-top: 70px;
//   padding-bottom: 50px;
//   font-family: "Rajdhani", sans-serif;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
// `;

// const ProjectName = styled.h1`
//   font-size: 36px;
//   text-align: center;
//   font-weight: 500;
//   margin-bottom: 60px;
// `;

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

// const GridContainer = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
//   gap: 30px;
//   max-width: 1000px;
//   width: 100%;
//   padding: 0 20px;
//   perspective: 2000px; /* Required for 3D effect */
// `;

// // --- COMPACT 3D CARD STYLING ---

// const CardWrapper = styled(motion.div)`
//   position: relative;
//   background: rgba(93, 95, 96, 0.08); /* Matches Experience */
//   border: 1px solid rgba(93, 95, 96, 0.3); /* Matches Experience */
//   border-radius: 12px;
//   transform-style: preserve-3d;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   height: 400px; /* Strict height to keep it precise and clean */
//   overflow: hidden;
//   transition: border-color 0.3s ease;

//   &:hover {
//     border-color: #fb7c14;
//   }
// `;

// const Spotlight = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   z-index: 1;
// `;

// const CardContent3D = styled.div`
//   transform-style: preserve-3d;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   z-index: 2;
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   height: 150px; /* Compact image height */
//   border-radius: 8px;
//   overflow: hidden;
//   margin-bottom: 16px;
//   transform: translateZ(25px); /* Pops out slightly */
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
// `;

// const ProjectImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.4s ease;

//   ${CardWrapper}:hover & {
//     transform: scale(1.05);
//   }
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   color: #fafafa;
//   font-weight: 600;
//   margin: 0 0 8px 0;
//   transform: translateZ(40px); /* Pops out more */
// `;

// const TechRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 6px;
//   margin-bottom: 12px;
//   transform: translateZ(30px);
// `;

// const TechBadge = styled.span`
//   background: rgba(251, 124, 20, 0.05);
//   color: #fb7c14;
//   font-size: 12px;
//   font-weight: 500;
//   padding: 4px 10px;
//   border-radius: 4px;
//   border: 1px solid rgba(251, 124, 20, 0.2);
// `;

// const Description = styled.p`
//   color: rgba(255, 255, 255, 0.7);
//   font-size: 15px;
//   line-height: 1.4;
//   margin: 0 0 15px 0;
//   transform: translateZ(20px);
  
//   /* Clamps text to exactly 3 lines to prevent long cards */
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// `;

// const FooterLinks = styled.div`
//   display: flex;
//   gap: 12px;
//   transform: translateZ(35px);
//   margin-top: auto; /* Pushes links to the bottom */
// `;

// const ActionBtn = styled(motion.a)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(255, 255, 255, 0.05);
//   padding: 6px;
//   border-radius: 8px;
//   border: 1px solid transparent;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(251, 124, 20, 0.1);
//     border-color: rgba(251, 124, 20, 0.3);
//   }

//   img {
//     width: 22px;
//     height: 22px;
//     filter: brightness(0.8);
//   }

//   &:hover img {
//     filter: brightness(1) invert(1);
//   }
// `;

// // --- THE 3D CARD LOGIC ---

// const PlayableCard = ({ project }) => {
//   const ref = useRef(null);
  
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
//   const smoothX = useSpring(mouseX, springConfig);
//   const smoothY = useSpring(mouseY, springConfig);

//   // Slightly softer tilt for a cleaner feel
//   const rotateX = useTransform(smoothY, [-0.5, 0.5], ["8deg", "-8deg"]);
//   const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);

//   const spotlightX = useMotionValue(0);
//   const spotlightY = useMotionValue(0);
//   const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(251, 124, 20, 0.1), transparent 80%)`;

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
    
//     const clientX = e.clientX - rect.left;
//     const clientY = e.clientY - rect.top;
    
//     const xPct = clientX / width - 0.5;
//     const yPct = clientY / height - 0.5;
    
//     mouseX.set(xPct);
//     mouseY.set(yPct);

//     spotlightX.set(clientX);
//     spotlightY.set(clientY);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//     spotlightX.set(0);
//     spotlightY.set(0);
//   };

//   const techArray = project.tech.split(" | ");

//   return (
//     <CardWrapper
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY }}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.5 }}
//     >
//       <Spotlight style={{ background: spotlightBackground }} />
      
//       <CardContent3D>
//         <ImageContainer>
//           <ProjectImg src={project.img} alt={project.title} />
//         </ImageContainer>

//         <Title>{project.title}</Title>
        
//         <TechRow>
//           {techArray.map((tech, i) => (
//             <TechBadge key={i}>{tech}</TechBadge>
//           ))}
//         </TechRow>
        
//         <Description>{project.desc}</Description>
        
//         <FooterLinks>
//           <ActionBtn href={project.github} target="_blank" whileTap={{ scale: 0.9 }}>
//             <img src={Github} alt="GitHub" />
//           </ActionBtn>
//           <ActionBtn href={project.live} target="_blank" whileTap={{ scale: 0.9 }}>
//             <img src={LinkImg} alt="Live site" />
//           </ActionBtn>
//         </FooterLinks>
//       </CardContent3D>
//     </CardWrapper>
//   );
// };

// // --- DATA & MAIN RENDER ---

// const projectData = [
//   { img: Cinematrix, title: "Cinematrix", tech: "React.js | Tailwind CSS | Next UI", desc: "Built CinemaTrix WebApp with React, TMDb API integration, and Ant Design for engaging movie exploration. Emphasized clean code and collaboration.", github: "https://github.com/mohdhadi01/CinemaTrix", live: "https://cinema-trix.vercel.app/home/" },
//   { img: CinematrixBackend, title: "Cinematrix-Backend", tech: "Node.js | Express.js | Typescript", desc: "Developed robust backend for the CinemaTrix web app, which enables users to explore movies and TV series. Designed and implemented database schemas using MongoDB to store user information.", github: "https://github.com/mohdhadi01/cinematrix-backend", live: "https://github.com/mohdhadi01/cinematrix-backend" },
//   { img: NewsChron, title: "NewsChron", tech: "React.js | Javascript | Ant Design | API", desc: "Crafted a dynamic React NewsWebApp using Newsdata API for real-time news, enabling user-friendly browsing, searching, and filtering.", github: "https://github.com/mohdhadi01/NEWS-CHRON-Production-Version/", live: "https://news-chron.vercel.app/Home/" },
//   { img: Portfolio, title: "Portfolio", tech: "React.js | J.S | Next UI | Tailwind CSS", desc: "Developed portfolio website with React.js, Tailwind CSS, Swiper, Scroller and Next UI, showcasing skills and projects effectively.", github: "https://github.com/mohdhadi01/MyPortfolio/", live: "https://mohdhadi.vercel.app/" },
//   { img: Notes, title: "Notes WebApp", tech: "React.js | Javascript | HTML | CSS", desc: "Developed a React Note WebApp with useState hook for note creation, deletion, and search. Modular structure with components for flexibility.", github: "https://github.com/mohdhadi01/NOTES--React-based-Note-App-/", live: "https://notes-reactapp.vercel.app/" },
//   { img: LiveTranslator, title: "LiveTranslator", tech: "React.js | Javascript | API Integration", desc: "Built a real-time language translator with React.js, detecting input language and utilizing Google Translate API through RapidAPI for translations.", github: "https://github.com/mohdhadi01/CodeClauseInternship_Live-Language-Translation/", live: "https://livetranslator.vercel.app/" },
// ];

// function Projects() {
//   return (
//     <MainDiv id="projects">
//       <h1 className="gradientText SkillHeading text-4xl text-center font-medium mt-unit-4xl mb-unit-3xl mb-16">
//         Projects
//       </h1>

//       <GridContainer>
//         {projectData.map((project, index) => (
//           <PlayableCard key={index} project={project} />
//         ))}
//       </GridContainer>
//     </MainDiv>
//   );
// }

// export default Projects;

// import React, { useRef } from "react";
// import styled from "styled-components";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { Parallax } from "react-scroll-parallax";

// // Assets (Replace with your actual transparent PNG/SVG logos)
// import ZoooxLogo from "../Assets/Projects-logo/zooox-logo.png"; 
// import BuckmintLogo from "../Assets/Projects-logo/buckmint-logo.svg"; 
// import MockInMinutesLogo from "../Assets/Projects-logo/mockinminutes-logo.png"; 
// import BidCraftLogo from "../Assets/Projects-logo/bidcraft-logo.png"; 
// import CinematrixLogo from "../Assets/Projects-logo/cinematrix-logo.png"; 
// import RibaPurifierLogo from "../Assets/Projects-logo/ribapurifier-logo.png"; 

// // --- BACKGROUND & HEADING STYLES ---

// const ProjectPage = styled.section`
//   padding-top: 7rem;
//   padding-bottom: 5rem;
//   position: relative;
//   overflow: hidden;
//   font-family: "Rajdhani", sans-serif;
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
//   background-image: linear-gradient(500deg, #a64941, #ce996e 47.71%, #ff9328 0, #6f71b6d8, #3b94a5, #dc4f1c);
//   position: absolute;
//   height: 250px;
//   width: 250px;
//   border-radius: 9999px;
//   filter: blur(150px);
//   -webkit-filter: blur(150px);
//   opacity: 0.5;

//   &.left { left: 0.25rem; top: 5rem; }
//   &.right { right: 0.25rem; top: 30rem; }
// `;

// const ProjectName = styled.h1`
//   font-size: 3rem; 
//   text-align: center;
//   font-weight: 600;
//   margin-top: 2rem;
//   margin-bottom: 4rem;
//   position: relative;
//   z-index: 1;
// `;

// const GradientText = styled.span`
//   background: -webkit-linear-gradient(-220deg, #816524c7, #e36600 19%, #a8642c 29%, rgba(25, 231, 231, 0.854) 59.58%, #ac8608 82.07%, #e36600 95.62%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// `;

// // --- GRID ---

// const ContentWrapper = styled.div`
//   max-width: 1100px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 20px;
//   position: relative;
//   z-index: 1;
// `;

// const GridContainer = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   gap: 50px 30px;
//   width: 100%;

//   @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
//   @media (max-width: 600px) { grid-template-columns: repeat(1, minmax(0, 1fr)); }
// `;

// // --- INTERACTIVE LOGO CARD COMPONENTS ---

// const CardWrapper = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   cursor: pointer;

//   &:hover .action-bar {
//     opacity: 1;
//     transform: translateX(-50%) translateY(0);
//   }
//   &:hover .image-overlay { opacity: 1; }
// `;

// const ImagePerspectiveBox = styled.div`
//   perspective: 1000px;
//   width: 100%;
//   margin-bottom: 16px;
// `;

// const ImageInner3D = styled(motion.div)`
//   position: relative;
//   width: 100%;
//   aspect-ratio: 1 / 1; 
//   border-radius: 16px;
//   transform-style: preserve-3d;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
//   border: 1px solid rgba(255, 255, 255, 0.05);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
// `;

// const ProjectLogoImg = styled(motion.img)`
//   width: 45%; 
//   height: 45%;
//   object-fit: contain;
//   filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.4)); 
// `;

// const TopBadge = styled.div`
//   position: absolute;
//   top: 14px;
//   left: 14px;
//   background: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(8px);
//   color: #fff;
//   font-size: 11px;
//   font-weight: 700;
//   padding: 5px 12px;
//   border-radius: 20px;
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   transform: translateZ(30px); 
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   pointer-events: none;
// `;

// const ImageOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   border-radius: 16px;
//   background: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(2px);
//   opacity: 0;
//   transition: all 0.4s ease;
//   transform: translateZ(10px);
//   pointer-events: none;
// `;

// const ActionBar = styled.div`
//   position: absolute;
//   bottom: 30px;
//   left: 50%;
//   transform: translateX(-50%) translateY(20px);
//   display: flex;
//   opacity: 0;
//   transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
//   transform-style: preserve-3d;
//   transform: translateZ(40px); 
// `;

// const DetailsBtn = styled(motion.div)`
//   background: #fb7c14;
//   color: #fff;
//   font-size: 14px;
//   font-weight: 600;
//   padding: 10px 24px;
//   border-radius: 30px;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   box-shadow: 0 10px 20px rgba(251, 124, 20, 0.3);

//   /* The little arrow icon */
//   &::after {
//     content: "→";
//     font-size: 16px;
//   }
// `;

// // --- TEXT STYLES ---

// const Title = styled.h3`
//   font-size: 22px;
//   font-weight: 600;
//   color: #fafafa;
//   margin: 0 0 6px 0;
//   line-height: 1.2;
// `;

// const Description = styled.p`
//   font-size: 15px;
//   color: rgba(255, 255, 255, 0.6);
//   line-height: 1.5;
//   margin: 0;
//   display: -webkit-box;
//   -webkit-line-clamp: 2; /* Strictly 2 lines for a clean "hook" */
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// `;

// // --- PLAYABLE CARD COMPONENT ---

// const PlayableLogoCard = ({ project }) => {
//   const ref = useRef(null);
  
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
//   const smoothX = useSpring(mouseX, springConfig);
//   const smoothY = useSpring(mouseY, springConfig);
  
//   const rotateX = useTransform(smoothY, [-0.5, 0.5], ["12deg", "-12deg"]);
//   const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-12deg", "12deg"]);

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     mouseX.set((e.clientX - rect.left) / width - 0.5);
//     mouseY.set((e.clientY - rect.top) / height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   const mainTech = project.tech.split(" | ")[0];

//   return (
//     <CardWrapper
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//       // In the future, wrap this in a <Link to={project.slug}> for React Router
//     >
//       <ImagePerspectiveBox>
//         <ImageInner3D
//           ref={ref}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           style={{ rotateX, rotateY, background: project.bgGradient }}
//         >
//           <TopBadge>{mainTech}</TopBadge>
          
//           <ProjectLogoImg 
//             src={project.logo} 
//             alt={project.title} 
//             whileHover={{ scale: 1.1, rotate: 2 }} 
//             transition={{ duration: 0.4, type: "spring" }}
//           />
          
//           <ImageOverlay className="image-overlay" />
          
//           <ActionBar className="action-bar">
//             <DetailsBtn whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               View Details
//             </DetailsBtn>
//           </ActionBar>
//         </ImageInner3D>
//       </ImagePerspectiveBox>

//       <Title>{project.title}</Title>
//       <Description>{project.desc}</Description>
//     </CardWrapper>
//   );
// };

// // --- SENIOR LEVEL PROJECT DATA ---
// // --- SENIOR LEVEL PROJECT DATA ---

// const projectData = [
//   { 
//     logo: ZoooxLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(59, 130, 246, 0.4) 0%, #121416 70%)", // Blue
//     title: "ZOOOX Mobile App", 
//     tech: "React Native | Redux | GraphQL", 
//     desc: "End-to-end mobile app with scalable auth and interactive spend analytics.", 
//     slug: "/projects/zooox-app" 
//   },
//   { 
//     logo: ZoooxLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(16, 185, 129, 0.4) 0%, #121416 70%)", // Green
//     title: "ZOOOX Web & Extension", 
//     tech: "React | TypeScript | Turborepo", 
//     desc: "Unified Turborepo monorepo and Chrome Extension sharing core business logic.", 
//     slug: "/projects/zooox-web" 
//   },
//   { 
//     logo: BuckmintLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(251, 124, 20, 0.4) 0%, #121416 70%)", // Brand Orange
//     title: "Buckmint DEX", 
//     tech: "React | Redux | TypeScript", 
//     desc: "Blockchain-based DEX dashboard implementing wallet, trading, and transaction history flows.", 
//     slug: "/projects/buckmint-dex" 
//   },
//   { 
//     logo: MockInMinutesLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(139, 92, 246, 0.4) 0%, #121416 70%)", // Purple
//     title: "MockInMinutes", 
//     tech: "React Native | Groq AI | Firebase", 
//     desc: "Cross-platform AI interview assistant with voice-driven TTS/STT flows for hands-free mocks.", 
//     slug: "/projects/mockinminutes" 
//   },
//   { 
//     logo: BidCraftLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(244, 63, 94, 0.4) 0%, #121416 70%)", // Rose/Red
//     title: "BidCraft Agentic RFP", 
//     tech: "React Native | REST API | Firebase", 
//     desc: "Cross-platform RFP assistant enabling vendors to ingest RFPs and generate AI-powered proposals.", 
//     slug: "/projects/bidcraft" 
//   },
//   { 
//     logo: RibaPurifierLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(20, 184, 166, 0.4) 0%, #121416 70%)", // Teal/Cyan
//     title: "Riba Purifier", 
//     tech: "React | TypeScript | PDF.js", 
//     desc: "Privacy-first web app that securely decrypts and parses unstructured bank statement PDFs 100% locally.", 
//     slug: "/projects/riba-purifier" 
//   },
//   { 
//     logo: CinematrixLogo, 
//     bgGradient: "radial-gradient(circle at top left, rgba(236, 72, 153, 0.4) 0%, #121416 70%)", // Pink
//     title: "Cinematrix", 
//     tech: "React.js | Node.js | Typescript", 
//     desc: "Robust full-stack movie exploration platform with TMDb integration and custom APIs.", 
//     slug: "/projects/cinematrix" 
//   }
// ];

// function Projects() {
//   return (
//     <ProjectPage id="projects">
//       <ScreenSize>
//         <Parallax speed={-15}>
//           <MainGradient className="left" />
//         </Parallax>
//         <Parallax speed={-20}>
//           <MainGradient className="right" />
//         </Parallax>
//       </ScreenSize>

//       <ContentWrapper>
//         <ProjectName>
//           <GradientText>Featured Work</GradientText>
//         </ProjectName>

//         <GridContainer>
//           {projectData.map((project, index) => (
//             <PlayableLogoCard key={index} project={project} />
//           ))}
//         </GridContainer>
//       </ContentWrapper>
//     </ProjectPage>
//   );
// }

// export default Projects;
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

// Assets (Replace with your actual transparent PNG/SVG logos)
import ZoooxLogo from "../Assets/Projects-logo/zooox-logo.png"; 
import BuckmintLogo from "../Assets/Projects-logo/buckmint-logo.svg"; 
import MockInMinutesLogo from "../Assets/Projects-logo/mockinminutes-logo.png"; 
import BidCraftLogo from "../Assets/Projects-logo/bidcraft-logo.png"; 
import CinematrixLogo from "../Assets/Projects-logo/cinematrix-logo.png"; 
import RibaPurifierLogo from "../Assets/Projects-logo/ribapurifier-logo.png"; 
import Github from "../Assets/Skills/icons8-github-96.png";
import LinkImg from "../Assets/LinkImg.png";

// --- BACKGROUND & HEADING STYLES ---

const ProjectPage = styled.section`
  padding-top: 3rem;
  padding-bottom: 5rem;
  position: relative;
  overflow: hidden;
  font-family: "Rajdhani", sans-serif;
  background-color: transparent; /* Seamless blend with your site */
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
  background-image: linear-gradient(
    500deg,
    #a64941,
    #ce996e 47.71%,
    #ff9328 0,
    #6f71b6d8,
    #3b94a5,
    #dc4f1c
  );
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 9999px;
  filter: blur(150px);
  -webkit-filter: blur(150px);
  opacity: 0.2;

  &.left {
    left: 0.25rem;
    top: 5rem;
  }

  &.right {
    right: 0.25rem;
    top: 30rem;
  }
`;

const ProjectName = styled.h1`
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

// --- GRID ---

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  width: 100%;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 650px) { grid-template-columns: repeat(1, minmax(0, 1fr)); }
`;

// --- FUTURISTIC BENTO CARD COMPONENTS ---

const CardContainer = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  background: #0a0a0c;
  padding: 1px; 
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  
  &:hover .card-glare { opacity: 1; }
  &:hover .action-bar { opacity: 1; transform: translateY(0); }
  &:hover .logo-img { transform: scale(1.1) translateY(-5px); }
  &:hover .bg-aura { transform: scale(1.2); opacity: 0.8; }
`;

const MouseGlowBorder = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 24px;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & { opacity: 1; }
`;

const CardInner = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(20, 22, 25, 0.9) 0%, rgba(10, 10, 12, 1) 100%);
  border-radius: 23px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
  transform-style: preserve-3d;
`;

const ImageSection = styled.div`
  position: relative;
  height: 220px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  background: #0d0f12;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 0;
  }
`;

const BackgroundAura = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  filter: blur(50px);
  opacity: 0.4;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
`;

const ProjectLogoImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0px 15px 25px rgba(0,0,0,0.5));
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
`;

const TopBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  color: ${(props) => props.$color};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const TextSection = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 2;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.2px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #8b949e;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Responsive, Dynamic Action Bar
const ActionBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 24px;
  background: linear-gradient(to top, #0a0a0c 60%, transparent);
  display: flex;
  justify-content: space-between; /* Evenly spaces buttons */
  gap: 12px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 3;
`;

const ActionBtn = styled(motion.a)`
  flex: 1; /* Automatically expands if there's only 1 button! */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  white-space: nowrap;
  
  img {
    width: 16px;
    height: 16px;
    filter: brightness(0) invert(1);
    transition: filter 0.2s ease;
  }

  &:hover {
    background: #fb7c14;
    border-color: #fb7c14;
    color: #000;
  }
  
  &:hover img {
    filter: brightness(0);
  }
`;

// --- THE 3D & GLOW LOGIC ---

const PlayableBentoCard = ({ project }) => {
  const ref = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-6deg", "6deg"]);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const borderBackground = useMotionTemplate`radial-gradient(300px circle at ${glowX}px ${glowY}px, ${project.brandColor}, transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    mouseX.set((e.clientX - rect.left) / width - 0.5);
    mouseY.set((e.clientY - rect.top) / height - 0.5);
    
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const mainTech = project.tech.split(" | ")[0];

  return (
    <CardContainer
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <MouseGlowBorder className="card-glare" style={{ background: borderBackground }} />
      
      <CardInner>
        <ImageSection>
          <BackgroundAura className="bg-aura" $color={project.brandColor} />
          <TopBadge $color={project.brandColor}>{mainTech}</TopBadge>
          <ProjectLogoImg className="logo-img" src={project.logo} alt={project.title} />
        </ImageSection>

        <TextSection>
          <Title>{project.title}</Title>
          <Description>{project.desc}</Description>
          
          <ActionBar className="action-bar">
            {/* Conditional Rendering: Only shows if the github link exists */}
            {project.github && (
              <ActionBtn href={project.github} target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src={Github} alt="GitHub" /> GitHub
              </ActionBtn>
            )}

            {/* Conditional Rendering: Only shows if the live link exists */}
            {project.live && (
              <ActionBtn href={project.live} target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src={LinkImg} alt="Live site" /> Live Demo
              </ActionBtn>
            )}
          </ActionBar>
        </TextSection>
      </CardInner>
    </CardContainer>
  );
};

// --- DATA ---

const projectData = [
  { 
    logo: ZoooxLogo, 
    brandColor: "#6366f1", 
    title: "ZOOOX Mobile App", 
    tech: "React Native | Redux | GraphQL", 
    desc: "End-to-end mobile app with scalable auth and interactive spend analytics.", 
    github: null, // Set to null because it's a company project
    live: "https://play.google.com/store/apps/details?id=xyz.zooox&hl=en_IN"
  },
  { 
    logo: ZoooxLogo, 
    brandColor: "#10b981", 
    title: "ZOOOX Web & Extension", 
    tech: "React | TypeScript | Turborepo", 
    desc: "Unified Turborepo monorepo and Chrome Extension sharing core business logic.", 
    github: null, // Set to null
    live: "https://app.zooox.xyz/"
  },
  { 
    logo: BuckmintLogo, 
    brandColor: "#fb7c14", 
    title: "Buckmint DEX", 
    tech: "React | Redux | TypeScript", 
    desc: "Blockchain-based DEX dashboard implementing wallet, trading, and transaction history flows.", 
    github: null, // Set to null
    live: "https://exchange.buckmint.org/"
  },
  { 
    logo: MockInMinutesLogo, 
    brandColor: "#a855f7", 
    title: "MockInMinutes", 
    tech: "React Native | Groq AI | Firebase", 
    desc: "Cross-platform AI interview assistant with voice-driven TTS/STT flows for hands-free mocks.", 
    github: "https://github.com/mohdhadi01/MockinMinutes", 
    live: "https://drive.google.com/drive/folders/1EV98jy2Hsh90v3Z3aENWw1hMH0LxbJyf"
  },
  { 
    logo: BidCraftLogo, 
    brandColor: "#f43f5e", 
    title: "BidCraft Agentic RFP", 
    tech: "React Native | REST API | Firebase", 
    desc: "Cross-platform RFP assistant enabling vendors to ingest RFPs and generate AI-powered proposals.", 
    github: "https://github.com/mohdhadi01/BidCraft-Agent-Backend", 
    live: "https://drive.google.com/drive/folders/1U4VtJ-qzqLQuRcQHUlaFui8jqUH8Xhsd"
  },
  { 
    logo: RibaPurifierLogo, 
    brandColor: "#14b8a6", 
    title: "Riba Purifier", 
    tech: "React | TypeScript | PDF.js", 
    desc: "Privacy-first web app that securely decrypts and parses unstructured bank statement PDFs 100% locally.", 
    github: "https://github.com/mohdhadi01/RibaPurifier", 
    live: "https://www.ribapurifier.online/"
  }
];

function Projects() {
  return (
    <ProjectPage id="projects">
      <ScreenSize>
        <Parallax speed={-15}><MainGradient className="left" /></Parallax>
        <Parallax speed={-20}><MainGradient className="right" /></Parallax>
      </ScreenSize>

      <ContentWrapper>
        <ProjectName>
          <GradientText>Featured Work</GradientText>
        </ProjectName>

        <GridContainer>
          {projectData.map((project, index) => (
            <PlayableBentoCard key={index} project={project} />
          ))}
        </GridContainer>
      </ContentWrapper>
    </ProjectPage>
  );
}

export default Projects;