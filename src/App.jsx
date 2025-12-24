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

        <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Virang Acharya. Built with React.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
