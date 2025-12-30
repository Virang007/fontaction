import React from 'react'

const Privacy = () => {
    return (
        <div className="page-container animate-in">
            <header className="page-hero">
                <h1>Privacy <span>Policy</span></h1>
                <p>Transparency and data protection details for my personal portfolio.</p>
            </header>

            <section className="privacy">
                <div className="glass-card privacy-content">
                    <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="privacy-section">
                        <h3>1. Data Collection</h3>
                        <p>
                            As a personal portfolio website, I do not actively collect, store, or process any personal data from visitors.
                            This site is a static showcase of my work and does not use tracking cookies or analytics scripts.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h3>2. External Links</h3>
                        <p>
                            My portfolio contains links to external platforms such as GitHub, LinkedIn, and project demos.
                            Once you leave this site, please note that I am not responsible for the privacy practices or
                            content of those third-party websites.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h3>3. Contact Information</h3>
                        <p>
                            If you have any questions or concerns regarding this policy, feel free to reach out via my
                            official social media profiles or email listed on the home page.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Privacy

