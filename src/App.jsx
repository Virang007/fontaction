import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Privacy from './pages/Privacy'
import GitPage from './pages/GitPage'

const Home = () => (
  <>
    {/* Hero Section */}
    <header className="hero animate-in">
      <h1>Virang Acharya</h1>
      <p className="role">Full-Stack Web & Mobile App Developer</p>
      <p className="tech-stack">Flutter | React | JavaScript | Firebase | Docker</p>
    </header>

    {/* About Me */}
    <section className="about animate-in" style={{ animationDelay: '0.1s' }}>
      <h2>About Me</h2>
      <div className="glass-card">
        <p>
          I am a motivated Full-Stack Web and Mobile Application Developer with a Master of Computer Applications (MCA).
          I specialize in building scalable, user-friendly applications using Flutter, React, JavaScript, and Firebase.
          I have hands-on experience in mobile app development, web development, CI/CD automation, Docker-based deployments,
          and WordPress plugin development.
        </p>
      </div>
    </section>

    {/* Skills */}
    <section className="skills animate-in" style={{ animationDelay: '0.2s' }}>
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category glass-card">
          <h3>Mobile Development</h3>
          <div className="skill-tags">
            <span className="tag">Flutter</span>
            <span className="tag">Dart</span>
            <span className="tag">Android App Dev</span>
          </div>
        </div>
        <div className="skill-category glass-card">
          <h3>Web Development</h3>
          <div className="skill-tags">
            <span className="tag">HTML5 / CSS3</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React.js</span>
            <span className="tag">PHP</span>
            <span className="tag">Laravel</span>
            <span className="tag">FastAPI</span>
            <span className="tag">Flask</span>
          </div>
        </div>
        <div className="skill-category glass-card">
          <h3>Backend & Database</h3>
          <div className="skill-tags">
            <span className="tag">Firebase</span>
            <span className="tag">Firestore</span>
            <span className="tag">REST APIs</span>
          </div>
        </div>
        <div className="skill-category glass-card">
          <h3>DevOps & Tools</h3>
          <div className="skill-tags">
            <span className="tag">Docker</span>
            <span className="tag">Docker Hub</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub Actions</span>
            <span className="tag">Linux</span>
            <span className="tag">Nginx</span>
            <span className="tag">EC2 Deployment</span>
          </div>
        </div>
        <div className="skill-category glass-card">
          <h3>Other Skills</h3>
          <div className="skill-tags">
            <span className="tag">WordPress Plugin Dev</span>
            <span className="tag">OCR Applications</span>
            <span className="tag">Python Animations</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Debugging</span>
          </div>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="projects animate-in" style={{ animationDelay: '0.3s' }}>
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card glass-card">
          <h3>NutrilyfPlus</h3>
          <p>Personal Diet Assistant for Athletes</p>
          <ul className="project-features">
            <li>Built with Flutter & Firebase</li>
            <li>Personalized diet plans</li>
            <li>Real-time nutrition tracking</li>
          </ul>
        </div>
        <div className="project-card glass-card">
          <h3>React App Runner</h3>
          <p>WordPress Plugin for React Apps</p>
          <ul className="project-features">
            <li>ZIP & Single JS support</li>
            <li>Auto-generated shortcodes</li>
            <li>Intelligent script loading</li>
          </ul>
        </div>
        <div className="project-card glass-card">
          <h3>YT Clip Splitter</h3>
          <p>Python-based GUI Application</p>
          <ul className="project-features">
            <li>yt-dlp integration</li>
            <li>Precise clip downloading</li>
            <li>Preview thumbnails</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Education & Objective */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="animate-in">
      <section>
        <h2>Education</h2>
        <div className="glass-card">
          <h3>Master of Computer Applications</h3>
          <p style={{ color: 'var(--accent-primary)' }}>Completed</p>
        </div>
      </section>
      <section>
        <h2>Career Objective</h2>
        <div className="glass-card">
          <p style={{ fontSize: '0.95rem' }}>
            To secure a challenging role as a Software Developer where I can apply my full-stack and mobile development skills,
            contribute to impactful projects, and grow in modern software engineering and DevOps practices.
          </p>
        </div>
      </section>
    </div>

    <section className="animate-in" style={{ animationDelay: '0.4s' }}>
      <h2>Learning & Certifications</h2>
      <div className="glass-card">
        <ul className="project-features">
          <li>Currently learning DevOps practices</li>
          <li>Actively preparing for competitive IT exams and interviews</li>
        </ul>
      </div>
    </section>
  </>
)


function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/git" element={<GitPage />} />
          </Routes>
        </main>

        <footer className="footer animate-in">
          <p>© {new Date().getFullYear()} Virang Acharya. Built with React.</p>
          <div className="footer-social">
            <a href="https://github.com/Virang007" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
