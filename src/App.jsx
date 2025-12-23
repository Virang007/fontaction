import { useState } from 'react'
import './index.css'

function App() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedName(name)
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>{import.meta.env.VITE_APP_TITLE || 'virang'}</h1>
        <p className="subtitle">Please enter your name below</p>

        <form onSubmit={handleSubmit} className="input-group">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">
            Show Name
          </button>
        </form>

        {submittedName && (
          <div className="greeting fade-in">
            <h2>Hello, <span className="highlight">{submittedName}</span>!</h2>
            <p>Great to have you here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
