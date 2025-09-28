import React from 'react';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "TB Dashboard Data Visualization",
            image: "/Images/TBDashBoard.jpg",
            description: "A Tableau dashboard project analyzing global tuberculosis data to derive insights for public health strategy.",
            role: "Data Analyst & Visualization Specialist",
            responsibilities: [
                "Cleaned and prepared TB burden dataset in Tableau",
                "Performed exploratory data analysis on TB/HIV co-infection rates",
                "Created interactive dashboards with calculated fields and trendlines",
                "Developed custom risk-index metric for targeted screening recommendations"
            ],
            outcome: "Delivered data-driven recommendations for Ontario's public health policy, highlighting high-risk populations and regional intervention strategies.",
            technologies: ["Tableau", "Data Cleaning", "Data Visualization", "Public Health Analytics"],
            status: "Completed",
            category: "Data Analysis"
        },
        {
            id: 2,
            title: "Use Case Diagram - SRS Documentation",
            image: "/Images/UseCase.jpg",
            description: "A comprehensive Use Case diagram created as part of a Software Requirements Specification document.",
            role: "Team Collaborator & Diagram Designer",
            responsibilities: [
                "Collaborated with team members to define system requirements",
                "Designed and documented use cases for system functionality",
                "Ensured alignment between business requirements and technical specifications",
                "Participated in team reviews and iterations of the SRS document"
            ],
            outcome: "Successfully delivered a clear, comprehensive Use Case diagram that guided the development team in understanding system interactions and user requirements.",
            technologies: ["UML", "Software Requirements", "Team Collaboration", "System Design"],
            status: "Completed",
            category: "Software Engineering"
        },
        {
            id: 3,
            title: "MEC Database Entity Relationship Diagram",
            image: "/Images/ERdiagram_MEC.png",
            description: "An Entity Relationship Diagram for a shopping dataset database design project.",
            role: "Database Designer & Team Contributor",
            responsibilities: [
                "Collaborated with team to analyze shopping dataset requirements",
                "Designed entity relationships and database schema",
                "Defined primary keys, foreign keys, and relationship cardinalities",
                "Participated in team discussions to optimize database structure"
            ],
            outcome: "Created a comprehensive ERD that served as the foundation for implementing a functional database system, ensuring data integrity and efficient querying capabilities.",
            technologies: ["ERD", "Database Design", "SQL", "Team Collaboration"],
            status: "Completed",
            category: "Database Management"
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>My Projects</h1>
                <p>Key projects from my Health Informatics Technology program</p>
            </div>
            
            <div className="page-content">
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-image"
                                />
                                <span className="project-status">{project.status}</span>
                            </div>
                            
                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-role">
                                    <h4>My Role: {project.role}</h4>
                                    <ul className="responsibilities-list">
                                        {project.responsibilities.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="project-outcome">
                                    <h4>Outcome:</h4>
                                    <p>{project.outcome}</p>
                                </div>
                                
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}