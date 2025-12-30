import React from 'react'

const GitPage = () => {
    const gitProjects = [
        {
            name: "fontaction",
            description: "Automatic font management and action platform for designers and developers.",
            url: "https://github.com/Virang007/fontaction",
            tag: "Main Project"
        },
        {
            name: "Portfolio V2",
            description: "Modern, responsive portfolio built with React and Vite, featuring glassmorphism design.",
            url: "https://github.com/Virang007/portfolio",
            tag: "Portfolio"
        },
        {
            name: "Mobile App Store",
            description: "A concept store for cross-platform mobile applications built with Flutter.",
            url: "https://github.com/Virang007",
            tag: "Mobile"
        }
    ]

    return (
        <div className="page-container animate-in">
            <header className="page-hero">
                <h1>Open Source <span>Projects</span></h1>
                <p>A collection of my recent work, side projects, and open-source contributions.</p>
            </header>

            <section className="git-projects">
                <div className="projects-grid">
                    {gitProjects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-badge">{project.tag}</div>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="git-link">
                                Repository <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default GitPage
