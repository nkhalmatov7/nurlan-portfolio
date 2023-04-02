import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import WorkAndSkills from './components/WorkAndSkills'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <WorkAndSkills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
