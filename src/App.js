import './App.css';
import Eductaion from './layout/components/education/eductaion';
import Introduction from './layout/components/introduction/introduction';
import Profile from './layout/components/profile/profile.';
import Reference from './layout/components/reference/reference';
import Skills from './layout/components/skills/skills';
import Experience from './layout/components/experience/experience';
import Project from './layout/components/projects/project';

function App() {
  return (
    <div className="App">
      <Introduction />
      <div className="sections">
        <div className="left">
          <Profile />
          <Eductaion />
          <Reference/>
        </div>
        <div className="right">
          <Skills />
          <Project />
        <Experience/>
        </div>
      </div>
    </div>
  );
}

export default App;
