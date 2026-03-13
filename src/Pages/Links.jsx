// import React from "react";
// import {
//   Github,
//   LinkedinIcon,
//   MoveUpRight,
//   NotebookText,
//   TwitterIcon,
//   UserSearchIcon,
// } from "lucide-react";
// import CinematrixIcon from "../Assets/ProjectICON/image-removebg-preview (1).png";
// import NewsChronIcon from "../Assets/ProjectICON/NewsChron_Icon-removebg-preview.png";
// import LiveTransIcon from "../Assets/ProjectICON/LiveTran_Icon-removebg-preview.png";
// import { Parallax } from "react-scroll-parallax";
// import styled from "styled-components";

// const SectionTitle = styled.h1`
//   font-size: 2.8rem;
//   text-align: center;
//   font-weight: 400;
//   text-transform: uppercase;
//   letter-spacing: 6px;
//   margin-top: 2rem;
//   margin-bottom: 5rem;
//   position: relative;
//   z-index: 1;
// `;

// const GradientText = styled.span`
//   background: linear-gradient(to right, #ffffff 20%, #ffcc99 50%, #fb7c14 90%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
//   filter: drop-shadow(0px 4px 15px rgba(251, 124, 20, 0.25));
// `;

// const FeaturedLinks = styled.div`
//   width: 100%;
//   justify-content: center;
//   column-gap: 20px;
//   display: grid;
//   color: white;
// `;

// const LinkBox = styled.div`
//   height: 55px;
//   width: 400px;
//   border: 1px solid rgb(61, 60, 60);
//   border-radius: 15px;
//   padding: 14px;
//   background-color: rgba(255, 255, 255, 0.041);
//   transition: 0.4s;
//   position: relative;
//   z-index: 99;

//   &:hover {
//     box-shadow: 0px 1px 2px rgba(8, 6, 0, 0.5),
//       0px 2px 4px rgba(0, 0, 0, 0.5),
//       0px 4px 8px rgba(0, 0, 0, 0.5),
//       0px 8px 16px rgba(8, 4, 0, 0.5);
//     border-radius: 15px;
//     background-color: rgba(165, 42, 42, 0.082);
//     transform: scale(1.05);
//   }

//   @media screen and (max-width: 450px) {
//     height: 55px;
//     width: 300px;
//   }
// `;

// const LinkArrowIcon = styled(MoveUpRight)`
//   position: relative;
//   margin-left: auto;
//   display: flex;
//   width: 1rem; /* tailwind w-4 */
// `;

// const LinkIconImg = styled.img`
//   height: 25px;
//   width: 25px;
// `;

// function Links() {
   
//   return (
//     <div>
//       <div name="links" className="AboutPage pt-28">
//         <div className="screenSize">
//           <Parallax speed={-20}>
//             <div className="main-gradient right-0 top-96"></div>
//           </Parallax>
//           <Parallax speed={-10}>
//             {/* <div class="main-gradient right-0 top-10"></div> */}
//           </Parallax>
//           <Parallax speed={-20}>
//             {/* <div class="main-gradient right-0 top-unit-9xl"></div> */}
//           </Parallax>
//         </div>

//         <SectionTitle>
//           <GradientText>Links</GradientText>
//         </SectionTitle>

//         <div className="linkContainer">
//           <FeaturedLinks>
//             <h2 className="KnowMore my-5 text-pretty font-semibold  text-slate-600 text-center">
//               KNOW MORE ABOUT ME
//             </h2>
//             <a href="/">
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="MyProfile flex gap-2 font-semibold">
//                   <UserSearchIcon /> mohdhadi
//                 </h3>{" "}
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>

//             <h2 className="featproject my-5 text-pretty font-semibold  text-slate-600 text-center">
//               FEATURED PROJECT
//             </h2>
//             <a
//               href="https://cinema-trix.vercel.app/home/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="Linkedin flex gap-2 font-semibold">
//                   {" "}
//                   <LinkIconImg src={CinematrixIcon} alt="" />{" "}
//                   CinemaTrix
//                 </h3>
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>
//             <a
//               href="https://news-chron.vercel.app/Home/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="Linkedin flex gap-2 font-semibold">
//                   <LinkIconImg src={NewsChronIcon} alt="" />
//                   News-Chron
//                 </h3>
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>
//             <a
//               href="https://notes-reactapp.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="Linkedin flex gap-2 font-semibold">
//                   <NotebookText /> Notes
//                 </h3>
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>
//             <a
//               href="https://livetranslator.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="Linkedin flex gap-2 font-semibold">
//                   <LinkIconImg src={LiveTransIcon} alt="" />
//                   LiveLanguageTranslator
//                 </h3>
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>

//             <h2 className="SocialLinks my-5 text-pretty font-semibold  text-slate-600 text-center">
//               SOCIAL LINKS
//             </h2>
//             <a
//               href="https://www.linkedin.com/in/mohd-hadi-5a4638226/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="Linkedin flex gap-2 font-semibold">
//                   {" "}
//                   <LinkedinIcon /> Linkedin
//                 </h3>{" "}
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>
//             <a
//               href="https://github.com/mohdhadi01/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="github flex gap-2 font-semibold">
//                   {" "}
//                   <Github /> Github
//                 </h3>{" "}
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>
//             <a
//               href="https://twitter.com/mohdhadi01/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkBox className="my-3 flex align-middle">
//                 <h3 className="github flex gap-2 font-semibold">
//                   {" "}
//                   <TwitterIcon /> X (Twitter)
//                 </h3>{" "}
//                 <LinkArrowIcon className="w-4 flex" />
//               </LinkBox>
//             </a>
//           </FeaturedLinks>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;

import React, { useRef } from "react";
import {
  Github,
  LinkedinIcon,
  MoveUpRight,
  NotebookText,
  TwitterIcon,
  UserSearchIcon,
} from "lucide-react";
import CinematrixIcon from "../Assets/ProjectICON/image-removebg-preview (1).png";
import NewsChronIcon from "../Assets/ProjectICON/NewsChron_Icon-removebg-preview.png";
import LiveTransIcon from "../Assets/ProjectICON/LiveTran_Icon-removebg-preview.png";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { projectData } from "./Projects";

// --- BACKGROUND & TYPOGRAPHY ---

const SectionTitle = styled(motion.h1)`
  font-size: 2.8rem;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-top: 2rem;
  margin-bottom: 3rem;
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

const CategoryHeader = styled(motion.h2)`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fb7c14; /* Brand Orange */
  text-align: center;
  margin-top: 40px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &::before, &::after {
    content: '';
    height: 1px;
    width: 30px;
    background: rgba(251, 124, 20, 0.3);
  }
`;

// --- LAYOUT ---

const FeaturedLinks = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 2;
  position: relative;
`;

// --- 3D INTERACTIVE LINK BOX ---

const LinkPerspective = styled.div`
  perspective: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const BoxInner = styled(motion.a)`
  position: relative;
  height: 60px;
  width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 0 20px;
  background: rgba(20, 22, 25, 0.6);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #e2e8f0;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: border-color 0.3s ease, color 0.3s ease;

  /* Icon & Text Container */
  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
    font-size: 16px;
    z-index: 2;
    transform: translateZ(20px); /* 3D pop off the glass */
  }

  /* Right Arrow */
  .arrow {
    z-index: 2;
    color: rgba(255, 255, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    transform: translateZ(20px);
  }

  /* Hover State */
  &:hover {
    border-color: #fb7c14;
    color: #ffffff;
    box-shadow: 0 15px 40px rgba(251, 124, 20, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1);

    .arrow {
      color: #fb7c14;
      transform: translateZ(20px) translate(4px, -4px); /* Arrow shoots up-right */
    }
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    height: 55px;
    .content { font-size: 15px; }
  }
`;

const LinkIconImg = styled.img`
  height: 24px;
  width: 24px;
  object-fit: contain;
  filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
`;

const Glare = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

// The Physics Component wrapper for your boxes
const InteractiveLinkBox = ({ href, children, icon }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glareBackground = useMotionTemplate`radial-gradient(250px circle at ${useTransform(smoothX, [-0.5, 0.5], [0, 100])}% ${useTransform(smoothY, [-0.5, 0.5], [0, 100])}%, rgba(251, 124, 20, 0.15), transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <LinkPerspective>
      <BoxInner
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Glare style={{ background: glareBackground }} />
        <div className="content">
          {icon}
          {children}
        </div>
        <MoveUpRight className="arrow w-5 h-5" />
      </BoxInner>
    </LinkPerspective>
  );
};

// --- ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

// --- MAIN COMPONENT ---

function Links() {
  return (
    <div style={{ position: "relative", overflow: "hidden", paddingBottom: "5rem" }}>
      <div name="links" className="AboutPage pt-18">
        
        {/* Background Parallax */}
        <div className="screenSize" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <Parallax speed={-20}>
            <div className="main-gradient right-0 top-96" style={{ opacity: 0.4 }}></div>
          </Parallax>
        </div>

        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GradientText>Links</GradientText>
        </SectionTitle>

        <div className="linkContainer">
          <FeaturedLinks
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* --- PRIMARY --- */}
            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <CategoryHeader>Know More About Me</CategoryHeader>
            </motion.div>
            
            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <InteractiveLinkBox href="/" icon={<UserSearchIcon />}>
                mohdhadi
              </InteractiveLinkBox>
            </motion.div>

            {/* --- PROJECTS (synced with Projects.jsx) --- */}
            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <CategoryHeader>Featured Projects</CategoryHeader>
            </motion.div>

            {projectData.map((project, index) => (
              <motion.div key={project.title || index} variants={itemVariants} style={{ width: "100%" }}>
                <InteractiveLinkBox
                  href={project.live}
                  icon={
                    project.logo ? (
                      <LinkIconImg src={project.logo} alt={project.title} />
                    ) : (
                      <NotebookText />
                    )
                  }
                >
                  {project.title}
                </InteractiveLinkBox>
              </motion.div>
            ))}

            {/* --- SOCIALS --- */}
            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <CategoryHeader>Social Links</CategoryHeader>
            </motion.div>

            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <InteractiveLinkBox href="https://www.linkedin.com/in/mohd-hadi-5a4638226/" icon={<LinkedinIcon />}>
                LinkedIn
              </InteractiveLinkBox>
            </motion.div>

            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <InteractiveLinkBox href="https://github.com/mohdhadi01/" icon={<Github />}>
                Github
              </InteractiveLinkBox>
            </motion.div>

            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <InteractiveLinkBox href="https://twitter.com/mohdhadi01/" icon={<TwitterIcon />}>
                X (Twitter)
              </InteractiveLinkBox>
            </motion.div>

          </FeaturedLinks>
        </div>
      </div>
    </div>
  );
}

export default Links;