import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Projects, Skills, Contact } from './components/Sections'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-orange-100 py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm">
              <a href="#top" className="text-gray-700 hover:text-orange-600">Back to top</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
