import React from "react";
import "./About.css";
import aboutImg from "../Assets/abouttt.png";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

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

function About() {
  return (
    <div name="about" className="AboutPage">
      <div className="screenSize">
        <Parallax speed={-20}>
          <div class="main-gradient left-0 top-80"></div>
          <div class="main-gradient right-0 top-10"></div>
        </Parallax>
      </div>
      <SectionTitle>
        <GradientText>About</GradientText>
      </SectionTitle>
      <div className="aboutSection flex justify-between">
        <div className="AboutImage">
          <img className="AboutImg" src={aboutImg} alt="" />
        </div>
        <div className="AboutText">
          <p className="aboutme my-5 text-sm">
          Frontend-focused Software Developer with 2+ year of full-time experience building cross-platform mobile (React Native)
          and web (React.js, GraphQL) products at an early-stage startup. Proven track record of owning features end-to-end - from
          architecture to production - across two products in fintech and e-commerce.{" "}
          </p>
          <hr />
          <p className="location contactDetail flex my-5 gap-6">
            {" "}
            <svg
              stroke="#ce6629f5"   
              fill="#ce6629f5"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-xl text-secondary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
            </svg>
            Noida, India
          </p>
          <p className="Mobile contactDetail flex my-5 gap-6 ">
            <svg
              stroke="#ce6629f5"
              fill="#ce6629f5"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="text-xl text-secondary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              ></path>
            </svg>
            +91 7905967769
          </p>
          <p className="Email contactDetail flex my-5 gap-6">
            <svg
              stroke="#ce6629f5"
              fill="#ce6629f5"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="text-xl text-secondary"
              height="1em"
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            hadi.88923@gmail.com
          </p>
          <a href="mailto: hadi.88923@gmail.com">
            <div className="Resume text-center cursor-pointer text-medium">
              Hire Me
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
