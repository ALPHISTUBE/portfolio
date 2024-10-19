// components/AboutMe.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Profile from "/assets/pic.png";
import TextTransition, { presets } from "react-text-transition";

const AboutMe = () => {
    const [index, setIndex] = useState(0);
    const TEXTS = [
        "DEVELOPER",
        "DESIGNER",
        "PROGRAMMER",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => setIndex(index => index + 1), 3000); // every 3 seconds
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <AboutSection>
            <motion.img 
                src={Profile} 
                alt="Profile" 
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }} 
            />
            <TextContainer>
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}>
                    <Highlight1>Hello, I'm</Highlight1> Rafawat Sholaiman Alphi
                </motion.h1>
                <motion.h2
                    className="text-transition-container"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}>
                    <StyledTextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</StyledTextTransition>
                </motion.h2>
                <motion.div 
                    className="text-transition-container"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                >
                    <StyledTextTransition
                        text={TEXTS[index % TEXTS.length]}
                        springConfig={presets.wobbly}
                    />
                </motion.div>
                <DetailSection>
                    <motion.h3 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}>
                        Education
                    </motion.h3>
                    <motion.h4 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}>
                        I have completed my <Highlight>Diploma in Engineering</Highlight>
                    </motion.h4>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}>
                        <p>
                            I am a passionate software developer with a knack for creating <Highlight>elegant solutions</Highlight>. I have a strong foundation in various programming languages and frameworks, and I am always eager to learn new technologies. My journey in the tech world started with a curiosity for how things work, and it has grown into a full-fledged career that I am deeply passionate about.
                        </p>
                    </motion.div>
                </DetailSection>
            </TextContainer>
        </AboutSection>
    );
};

export default AboutMe;

// styled-components
const AboutSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    height: 100vh;
    padding: 0 20px;
    background-color: #282c34; /* Dark background */
    color: #ffffff; /* White text */
    text-align: left;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        text-align: center;
    }

    img {
        margin-right: 140px; /* Increase margin to bring img further from text */
        width: 400px; /* Increase width */
        height: 400px; /* Increase height */
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 20px;
            width: 200px;
            height: 200px;
        }
    }
`;

const TextContainer = styled.div`
    width: 60%; /* Set a fixed width */
    margin-left: 20px; /* Add left margin */

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }

    h1, h2 {
        color: #ffa200; /* Updated color */
    }

    p {
        color: #adb5bd; /* Light gray */
        font-size: 1.5rem; /* Increased font size */

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .text-transition-container {
        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
        }
    }
`;

const DetailSection = styled.div`
    margin-top: 2rem;

    h3 {
        font-size: 1.8rem;
        color: #ffa200; /* Updated color */
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    h4 {
        font-size: 1.5rem;
        color: #adb5bd; /* Light gray */
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }

    p {
        font-size: 1.5rem; /* Increased font size */
        color: #adb5bd; /* Light gray */
        line-height: 1.5;

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }
`;

const Highlight = styled.span`
    color: #61dafb; /* React's primary color */
    font-weight: bold;
    font-family: 'Roboto', sans-serif; /* Popular font for portfolios */
`;

const Highlight1 = styled.span`
    color: #adb5bd; /* React's primary color */
    font-weight: bold;
    font-family: 'Roboto', sans-serif; /* Popular font for portfolios */
`;

const StyledTextTransition = styled(TextTransition)`
    color: #61dafb; /* React's primary color */
`;
