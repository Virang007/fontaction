import React from 'react'

const Privacy = () => {
    return (
        <div className="page-container animate-in">
            <section className="privacy">
                <h2>Privacy Policy</h2>
                <div className="glass-card">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <h3>1. Data Collection</h3>
                    <p>
                        As a personal portfolio website, this site does not actively collect any personal data from visitors.
                        No cookies are used for tracking purposes.
                    </p>
                    <h3>2. External Links</h3>
                    <p>
                        My portfolio contains links to external sites such as GitHub.
                        I am not responsible for the privacy practices or content of these external sites.
                    </p>
                    <h3>3. Contact Information</h3>
                    <p>
                        If you have any questions regarding this privacy policy, you can contact me through my social profiles.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Privacy
