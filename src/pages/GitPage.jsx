import React from 'react'

const GitPage = () => {
    const gitProjects = [
        {
            name: "fontaction",
            description: "Automatic font management and action platform.",
            url: "https://github.com/Virang007/fontaction",
            tag: "Main"
        },
        {
            name: "Portfolio",
            description: "The source code of this portfolio website.",
            url: "https://github.com/Virang007/portfolio",
            tag: "Web"
        }
    ]

    return (
        <div className="page-container animate-in">
            <section className="git-projects">
                <h2>GitHub Projects</h2>
                <div className="projects-grid">
                    {gitProjects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-badge">{project.tag}</div>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="git-link">
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default GitPage
