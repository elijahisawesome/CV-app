import './App.css';
import React, {Component} from 'react';
import Skills from './Components/Controllers/SkillsController.js';
import Education from './Components/Controllers/EducationController.js';
import Experience from './Components/Controllers/ExperienceController.js';
import Headshot from './Components/Controllers/HeadshotController.js';
import Objectives from './Components/Controllers/ObjectiveController.js';


class App extends Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div>
        <Education/>
        <Experience/>
        <Skills/>
      </div>
    )
  }


}

export default App;
