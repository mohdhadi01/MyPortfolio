// import React from "react";
// import "./About.css";
// import aboutImg from "../Assets/abouttt.png";
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

// function About() {
//   return (
//     <div name="about" className="AboutPage">
//       <div className="screenSize">
//         <Parallax speed={-20}>
//           <div class="main-gradient left-0 top-80"></div>
//           <div class="main-gradient right-0 top-10"></div>
//         </Parallax>
//       </div>
//       <SectionTitle>
//         <GradientText>About</GradientText>
//       </SectionTitle>
//       <div className="aboutSection flex justify-between">
//         <div className="AboutImage">
//           <img className="AboutImg" src={aboutImg} alt="" />
//         </div>
//         <div className="AboutText">
//           <p className="aboutme my-5 text-sm">
//           Frontend-focused Software Developer with 2+ year of full-time experience building cross-platform mobile (React Native)
//           and web (React.js, GraphQL) products at an early-stage startup. Proven track record of owning features end-to-end - from
//           architecture to production - across two products in fintech and e-commerce.{" "}
//           </p>
//           <hr />
//           <p className="location contactDetail flex my-5 gap-6">
//             {" "}
//             <svg
//               stroke="#ce6629f5"   
//               fill="#ce6629f5"
//               stroke-width="0"
//               viewBox="0 0 24 24"
//               class="text-xl text-secondary"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path fill="none" d="M0 0h24v24H0z"></path>
//               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
//             </svg>
//             Noida, India
//           </p>
//           <p className="Mobile contactDetail flex my-5 gap-6 ">
//             <svg
//               stroke="#ce6629f5"
//               fill="#ce6629f5"
//               stroke-width="0"
//               viewBox="0 0 16 16"
//               class="text-xl text-secondary"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
//               ></path>
//             </svg>
//             +91 7905967769
//           </p>
//           <p className="Email contactDetail flex my-5 gap-6">
//             <svg
//               stroke="#ce6629f5"
//               fill="#ce6629f5"
//               stroke-width="0"
//               viewBox="0 0 20 20"
//               aria-hidden="true"
//               class="text-xl text-secondary"
//               height="1em"
//               width="1em" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//             </svg>
//             hadi.88923@gmail.com
//           </p>
//           <a href="mailto: hadi.88923@gmail.com">
//             <div className="Resume text-center cursor-pointer text-medium">
//               Hire Me
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

import aboutImg from "../Assets/abouttt.png"; // Make sure this path is correct

// --- BACKGROUND & LAYOUT ---

const AboutWrapper = styled.section`
  position: relative;
  padding: 4rem 0;
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
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
  z-index: 0;
  pointer-events: none;
`;

const MainGradient = styled.div`
  background-image: linear-gradient(500deg, rgba(166, 73, 65, 0.3), rgba(206, 153, 110, 0.3), rgba(251, 124, 20, 0.2));
  position: absolute;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  filter: blur(150px);
  z-index: 0;

  &.left { left: -10rem; top: 10rem; }
  &.right { right: -5rem; bottom: 0rem; }
`;

// --- TYPOGRAPHY ---

const SectionTitle = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 2.8rem);
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-top: 2rem;
  margin-bottom: 4rem;
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

// --- CONTENT GRID ---

const ContentZIndex = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// --- 3D GLASS IMAGE CARD ---

const ImagePerspective = styled.div`
  perspective: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GlassCard = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/5;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 15px;
  transform-style: preserve-3d;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

const CardGlare = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  filter: contrast(1.1) saturate(1.1);
  transform: translateZ(30px); /* Pops image out of the glass */
`;

// --- DEVELOPER TERMINAL ---

const TerminalBox = styled(motion.div)`
  background: rgba(10, 12, 16, 0.85);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  width: 100%;
`;

const TerminalHeader = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .red { background: #ff5f56; }
  .yellow { background: #ffbd2e; }
  .green { background: #27c93f; }
  
  .title {
    margin-left: auto;
    margin-right: auto;
    color: #8b949e;
    font-size: 13px;
    font-family: monospace;
    letter-spacing: 1px;
  }
`;

const TerminalBody = styled.div`
  padding: 30px;
  color: #c9d1d9;
  font-size: 17px;
  line-height: 1.7;
  font-family: monospace;

  .highlight {
    color: #fb7c14;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    padding: 20px;
  }
`;

// --- CONTACT BENTO PILLS ---

const ContactGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const ContactPill = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 20px;
  border-radius: 12px;
  color: #a0aec0;
  font-size: 15px;
  font-family: monospace;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;

  svg {
    font-size: 20px;
    color: #fb7c14;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(251, 124, 20, 0.1);
    border-color: #fb7c14;
    color: #ffffff;
    transform: translateX(10px);

    svg { transform: scale(1.2); }
  }
`;

// --- MAGNETIC BUTTON ---

const MagneticButtonWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
  padding: 20px 20px 20px 0; 
  margin-top: 20px;
`;

const StyledMagnetBtn = styled(motion.a)`
  position: relative;
  overflow: hidden;
  background: #ffffff;
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);

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
    box-shadow: 0 15px 35px rgba(251, 124, 20, 0.5);
    background: #fb7c14;
    color: #ffffff;
    &::after { left: 150%; }
  }
`;

const MagneticButton = ({ children, href }) => {
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
      <StyledMagnetBtn href={href}>
        {children}
      </StyledMagnetBtn>
    </MagneticButtonWrapper>
  );
};

// --- MAIN COMPONENT ---

function About() {
  // 3D Card Physics
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  const glareBackground = useMotionTemplate`radial-gradient(300px circle at ${useTransform(smoothX, [-0.5, 0.5], [0, 100])}% ${useTransform(smoothY, [-0.5, 0.5], [0, 100])}%, rgba(255,255,255,0.15), transparent 60%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    mouseX.set((e.clientX - rect.left) / width - 0.5);
    mouseY.set((e.clientY - rect.top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <AboutWrapper id="about" name="about">
      <GridOverlay />
      <Parallax speed={-15}>
        <MainGradient className="left" />
      </Parallax>
      <Parallax speed={-5}>
        <MainGradient className="right" />
      </Parallax>

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <GradientText>About Me</GradientText>
      </SectionTitle>

      <ContentZIndex>
        {/* LEFT: 3D Holographic Image */}
        <ImagePerspective>
          <GlassCard
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <CardGlare style={{ background: glareBackground }} />
            <ProfileImg src={aboutImg} alt="Mohd Hadi" />
          </GlassCard>
        </ImagePerspective>

        {/* RIGHT: Developer Data */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Mac-Style Terminal */}
          <TerminalBox variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <TerminalHeader>
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <div className="title">hadi@portfolio:~</div>
            </TerminalHeader>
            <TerminalBody>
              > Frontend-focused Software Developer with <span className="highlight">2+ years</span> of full-time experience building cross-platform mobile (React Native) and web (React.js, GraphQL) products at an early-stage startup. <br /><br />
              > Proven track record of owning features end-to-end — from architecture to production — across two distinct products in the <span className="highlight">fintech</span> and <span className="highlight">e-commerce</span> sectors.
            </TerminalBody>
          </TerminalBox>

          {/* Interactive Contact Bento Grid */}
          <ContactGrid variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ContactPill href="https://maps.google.com/?q=Noida,India" target="_blank">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
              </svg>
              Noida, India
            </ContactPill>

            <ContactPill href="tel:+917905967769">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
              </svg>
              +91 7905967769
            </ContactPill>

            <ContactPill href="mailto:hadi.88923@gmail.com">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              hadi.88923@gmail.com
            </ContactPill>
          </ContactGrid>

          {/* Magnetic Action */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <MagneticButton href="mailto:hadi.88923@gmail.com">
              Hire Me
            </MagneticButton>
          </motion.div>

        </motion.div>
      </ContentZIndex>
    </AboutWrapper>
  );
}

export default About;