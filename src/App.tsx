import { HashRouter as Router, Route, Routes } from 'react-router'

import Header from './components/Header'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'
import Listen from './pages/Listen'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>  
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/portfolio/:slug" element={<Project />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
