import React from 'react';

export default function Skills() {
    const skills = [
        {
            title: "Web Development",
            description: "Building responsive websites using HTML5, CSS3, and JavaScript. Currently developing my skills in modern frameworks and best practices.",
            technologies: ["HTML/CSS", "Responsive Design", "JavaScript"],
            status: "Developing"
        },
        {
            title: "Software Development",
            description: "Creating applications with Java and C#. Focusing on clean code principles and system architecture as I advance my programming knowledge.",
            technologies: ["Java", "C#", "System Design"],
            status: "Learning"
        },
        {
            title: "Database Management",
            description: "Working with SQL databases and learning advanced database concepts. Building foundational skills in data modeling and optimization.",
            technologies: ["SQL", "Database Design"],
            status: "Foundational"
        },
        {
            title: "Health Data Analysis",
            description: "Using Tableau and Excel for data visualization. Recently completed a health data project and expanding my analytical capabilities.",
            technologies: ["Tableau", "Excel", "Data Visualization"],
            status: "Project Experience"
        },
        {
            title: "Linux/Unix Systems",
            description: "Developing proficiency in Unix/Linux environments through coursework and practical exercises. Building command-line skills.",
            technologies: ["Linux", "Unix", "Command Line"],
            status: "Developing"
        },
        {
            title: "Health Integration Solutions",
            description: "Beginning my journey with Rhapsody (Iguana) integration engine. Excited to grow in healthcare system integration.",
            technologies: ["Rhapsody", "Iguana", "System Integration"],
            status: "Starting Soon"
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Skills & Technologies</h1>
                <p>Technical skills I'm developing through my Health Informatics Technology program</p>
            </div>
            
            <div className="page-content">
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-status">{skill.status}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className="technologies-list">
                                {skill.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}