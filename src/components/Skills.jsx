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

    // Split skills into three parts
    const skillsPart1 = skills.slice(0, Math.ceil(skills.length / 3));
    const skillsPart2 = skills.slice(Math.ceil(skills.length / 3), Math.ceil(2 * skills.length / 3));
    const skillsPart3 = skills.slice(Math.ceil(2 * skills.length / 3));

    return (
        <SkillsContainer>
            <SkillsSection>
                <h2>Skills</h2>
                <SkillGrid>
                    {skillsPart1.map((skill, index) => (
                        <SkillIcon key={index} skill={skill} />
                    ))}
                </SkillGrid>
                <SkillGrid>
                    {skillsPart2.map((skill, index) => (
                        <SkillIcon key={index} skill={skill} />
                    ))}
                </SkillGrid>
                <SkillGrid>
                    {skillsPart3.map((skill, index) => (
                        <SkillIcon key={index} skill={skill} />
                    ))}
                </SkillGrid>
            </SkillsSection>
            
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

const SkillIcon = ({ skill }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <SkillIconCard>
                <img src={skill.logo} alt={`${skill.name} logo`} />
            </SkillIconCard>
        </motion.div>
    );
};

export default Skills;

const SkillsContainer = styled.div`
    padding: 50px;
    background-color: #e5e5e5;
    overflow-y: auto;
    height: 150vh;
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
    ::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    }
    
    h2 {
        font-size: 2rem;
    }
`;

const SkillsSection = styled.section`
    margin-bottom: 50px;
    shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: auto; /* Adjust height as needed */
`;

const SkillHistogram = styled(motion.div)`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    height: 450px; /* Adjust height as needed */
    scrollbar-width: thin; /* For Firefox */
    -ms-overflow-style: -ms-autohiding-scrollbar; /* For Internet Explorer and Edge */
    ::-webkit-scrollbar {
        height: 8px; /* For Chrome, Safari, and Opera */
    }
    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`;

const SkillIconCard = styled.div`
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    img {
        width: 100px;
        height: 100px;
    }

    @media (max-width: 768px) {
        img {
            width: 30px;
            height: 30px;
        }
    }
`;
