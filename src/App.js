import './App.css';
import React, {Component} from 'react';
import Skillbox from './Components/Skills.js';
import EducationRender from './Components/EducationController.js';
import Experiencebox from './Components/Experience.js';
import Headshot from './Components/Headshot.js';
import Objectivebox from './Components/Objective.js';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      SkillboxData:{},
      EducationboxData:{},
      ExperienceboxData:{},
      HeadshotData:{},
      ObjectiveboxData:{},
    }


  }



  render(){
    return(
      <div>
        <EducationRender/>
      </div>
    )
  }


}

export default App;
