import './App.css';
import React, {Component} from 'react';
import Skillbox from './Components/Skills.js';
import EducationRender from './Components/EducationController.js';
import ExperienceRender from './Components/ExperienceController.js';
import Headshot from './Components/Headshot.js';
import Objectivebox from './Components/Objective.js';


class App extends Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div>
        <EducationRender/>
        <ExperienceRender/>
      </div>
    )
  }


}

export default App;
