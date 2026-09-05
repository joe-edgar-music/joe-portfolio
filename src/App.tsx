import { HashRouter as Router, Route, Routes } from 'react-router'

import Header from './components/Header'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'

function App() {
  return (
    <>
    <Header />
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/portfolio/:slug" element={<Project />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
