// components/AboutMe.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Profile from "/assets/pic.png";
import CompanyLogo from "/assets/opzo.png"; // Add your company logo here
import TextTransition, { presets } from "react-text-transition";

const AboutMe = () => {
    const [index, setIndex] = useState(0);
    const TEXTS = [
        "DEVELOPER",
        "DESIGNER",
        "PROGRAMMER",
    ];

    const PROJECTS = [
        "27   Total Project",
        "10   Unity",
        "02   Unreal Engine",
        "05   React",
        "03   Web Application",
        "07   AI & ML Model",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => setIndex(index => index + 1), 3000); // every 3 seconds
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <AboutSection>
            <motion.img 
                className='profile-pic'
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
                <CurrentWorkSection>
                    <motion.div
                        className='Work_at'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3><Highlight>Currently Working At</Highlight></h3>
                        <a id='linked' href='https://opzo.app/'><img src={CompanyLogo} alt="Company Logo" /></a>
                    </motion.div>
                    <motion.div
                        className='project'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span>Project<p>Completed</p></span>
                        <StyledTextTransition springConfig={presets.wobbly} className='project-items'>{PROJECTS[index % PROJECTS.length]}</StyledTextTransition>
                    </motion.div>
                </CurrentWorkSection>
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
    height: 127vh;
    padding: 0 20px;
    background-color: #282c34; /* Dark background */
    color: #ffffff; /* White text */
    text-align: left;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }

    .profile-pic {
        margin-right: 140px; /* Increase margin to bring img further from text */
        width: 400px; /* Increase width */
        height: 400px; /* Increase height */
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */

        @media (max-width: 768px) {
            margin: 0 auto 20px auto; /* Center the image */
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

const CurrentWorkSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Roboto', sans-serif; /* Popular font for portfolios */

    @media (max-width: 768px) {
        flex-direction: column;
    }

    .work_at {
        display: flex;
        justify-content: space-between;
        width: 48%; /* Adjust width to fit two items in a row */

        @media (max-width: 768px) {
            align-items: center;
            width: 100%; /* Full width on small screens */
        }

        h3 {
            font-size: 1.8rem;
            color: #ffa200; /* Updated color */
            margin-right: 3rem; /* Add margin to the right */

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        a {
            background-color: #1c1f24; /* Darker background color */
            display: block;
            margin-bottom: 0; /* Remove bottom margin */
            width: 70px; /* Reduce width */
            height: 70px; /* Reduce height */
        }

        img {
            width: 100px !important; /* Adjust size */
            height: 100px !important; /* Adjust size */
            object-fit: cover;
            @media (max-width: 768px) {
                width: 60px !important; /* Adjust size for small screens */
                height: 60px !important; /* Adjust size for small screens */
            }
        }

        #linked {
            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
        }
    }

    .project{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 48%; /* Adjust width to fit two items in a row */
        margin-top: 1rem; /* Add margin to the right */

        @media (max-width: 768px) {
            align-items: center;
            width: 100%; /* Full width on small screens */
        }

        span {
            display: flex;
            font-size: 1.5rem;
            margin-bottom: 0rem;
            color: #ffa200; /* Light gray */
            font-weight: bold;
            text-transform: uppercase;
        }
        
        p{
            margin-top: 0rem;
            margin-left: 0.5rem;
            font-size: 1.5rem;
        }

        .project-items {
            font-size: 2rem;
            margin-top: 0.5rem;
            @media (max-width: 768px) {
                margin-top: 0;
                display: flex;
                justify-content: center;
            }
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
