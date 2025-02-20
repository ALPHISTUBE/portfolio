// components/Skills.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const skills = [
    { name: 'Unity', level: 'Expert', logo: '/assets/unity.png' },
    { name: 'Unreal', level: 'Intermediate', logo: '/assets/unreal.png' },
    { name: 'Blender', level: 'Expert', logo: '/assets/blender.png' },
    { name: 'React', level: 'Expert', logo: '/assets/react.svg' },
    { name: 'HTML', level: 'Expert', logo: '/assets/html.png' },
    { name: 'CSS', level: 'Expert', logo: '/assets/css.png' },
    { name: 'Java Script', level: 'Expert', logo: '/assets/js.png' },
    { name: 'Photoshop', level: 'Expert', logo: '/assets/ps.png' },
    { name: 'Affer Effect', level: 'Intermediate', logo: '/assets/ae.png' },
    { name: 'Illustrator', level: 'Intermediate', logo: '/assets/adobeAI.png' },
    { name: 'Premiere pro', level: 'Intermediate', logo: '/assets/pr.png' },
    { name: 'Android Studio', level: 'Intermediate', logo: '/assets/androidS.png' },
    { name: 'Flutter', level: 'Beginner', logo: '/assets/flutter.png' },
    { name: 'C++', level: 'Intermediate', logo: '/assets/cpluse.png' },
    { name: 'C#', level: 'Expert', logo: '/assets/cSharp.png' },
    { name: '.Net', level: 'Expert', logo: '/assets/dotnet.png' },
    { name: 'Java', level: 'Intermediate', logo: '/assets/java.png' },
    { name: 'Python', level: 'Expert', logo: '/assets/python.png' },
    { name: 'AI', level: 'Beginner', logo: '/assets/AI.png' },
    { name: 'ML', level: 'Beginner', logo: '/assets/ml.png' },
    { name: 'NLP', level: 'Beginner', logo: '/assets/NLP.png' },
];

const Skills = () => {
    const [showHistogram, setShowHistogram] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position > 300) { // Adjust the scroll position as needed
                setShowHistogram(true);
                controls.start({ opacity: 1, y: 0 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    const getColor = (level) => {
        switch (level) {
            case 'Beginner':
                return 'rgba(255, 140, 0, 0.8)'; // Deep orange with 0.8 opacity
            case 'Intermediate':
                return 'rgba(255, 193, 7, 0.8)'; // Deep yellow with 0.8 opacity
            case 'Expert':
                return 'rgba(154, 205, 50, 0.8)'; // Yellow-green with 0.8 opacity
            default:
                return 'rgba(75, 192, 192, 0.2)'; // Default color
        }
    };

    const getBorderColor = (level) => {
        switch (level) {
            case 'Beginner':
                return 'rgba(255, 140, 0, 1)'; // Deep orange with 1 opacity
            case 'Intermediate':
                return 'rgba(255, 193, 7, 1)'; // Deep yellow with 1 opacity
            case 'Expert':
                return 'rgba(154, 205, 50, 1)'; // Yellow-green with 1 opacity
            default:
                return 'rgba(75, 192, 192, 0.4)'; // Default color
        }
    };

    const data = {
        labels: skills.map(skill => skill.name), // Use skill names as labels
        datasets: [
            {
                label: 'Beginner',
                data: skills.map(skill => skill.level === 'Beginner' ? 1 : null),
                backgroundColor: getColor('Beginner'), // Use getColor function for background color
                borderColor: getBorderColor('Beginner'), // Use getBorderColor function for border color
                borderWidth: 1,
                stack: 'Stack 0', // Add stack property
            },
            {
                label: 'Intermediate',
                data: skills.map(skill => skill.level === 'Intermediate' ? 2 : null),
                backgroundColor: getColor('Intermediate'), // Use getColor function for background color
                borderColor: getBorderColor('Intermediate'), // Use getBorderColor function for border color
                borderWidth: 1,
                stack: 'Stack 0', // Add stack property
            },
            {
                label: 'Expert',
                data: skills.map(skill => skill.level === 'Expert' ? 3 : null),
                backgroundColor: getColor('Expert'), // Use getColor function for background color
                borderColor: getBorderColor('Expert'), // Use getBorderColor function for border color
                borderWidth: 1,
                stack: 'Stack 0', // Add stack property
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Skill Levels',
            },
        },
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, values) {
                        const skill = skills[index];
                        return skill ? skill.name : value;
                    },
                    font: {
                        size: 10 // Adjust font size as needed
                    }
                }
            },
            y: {
                display: false, // Hide the y-axis labels
            }
        },
        maintainAspectRatio: false, // Add this line to allow custom height
        animation: {
            onComplete: () => {
                let delayed;
                if (!delayed) {
                    delayed = true;
                    const chart = ChartJS.instances[0];
                    const meta = chart.getDatasetMeta(0);
                    meta.data.forEach((bar, index) => {
                        bar.transition({
                            duration: 1000,
                            delay: index * 100,
                            easing: 'easeOutBounce',
                            from: { y: chart.scales.y.getPixelForValue(0) },
                            to: { y: bar.y },
                        });
                    });
                }
            },
        },
    };

    return (
        <SkillsContainer>
            <SkillsSection>
                <h2>Skill Levels</h2>
                <SkillHistogram
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                    style={{ display: showHistogram ? 'block' : 'none' }}
                >
                    <Bar data={data} options={options} height={200} /> {/* Adjust height as needed */}
                </SkillHistogram>
            </SkillsSection>
        </SkillsContainer>
    );
};

export default Skills;

const SkillsContainer = styled.div`
    padding: 50px;
    background-color: #e5e5e5;
    overflow-y: hidden; /* Stop scrolling */
    height: 90vh;
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
    ::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    }

    @media (max-width: 768px) {
        padding: 20px;
        height: auto; /* Adjust height for mobile */
    }

    h2 {
        font-size: 4rem;
        text-align: center;
        @media (max-width: 768px) {
            text-align: left;
            font-size: 2rem;
        }
    }
`;

const SkillsSection = styled.section`
    margin-bottom: 50px;
`;

const SkillHistogram = styled(motion.div)`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    height: 100%; /* Adjust height to fill container */
    width: 100%; /* Adjust width to fill container */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
    ::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    }

    @media (max-width: 768px) {
        height: auto; /* Adjust height for mobile */
        width: 900px; /* Ensure it fits within the mobile screen */
    }
    
    @media (min-width: 1200px) {
        height: 450px; /* Adjust height as needed */
    }
`;
