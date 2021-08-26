import './App.css';
import React, {Component} from 'react';
import Skillbox from './Components/Skills.js';
import EducationRender from './Components/Education.js';
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

    this.submitEducationBox = this.submitEducationBox.bind(this);
  }
  submitEducationBox(e){
    e.preventDefault();
    this.setState({
      EducationboxData:{
        School:this.getInput('edboxschool'),
        From:this.getInput('edboxfrom'),
        To:this.getInput('edboxto'),
        GPA:this.getInput('edboxgpa'),
      }
    })
  }
  getInput(name){
    return document.getElementById(name).value;
  }

  render(){
    return(
      <div>
        {this.Educationbox()}
        <EducationRender props={this.state.EducationboxData}/>
      </div>
    )
  }

  Educationbox(){
    return(
      <div>
        <form onSubmit={this.submitEducationBox}>
          <p>
            Education
          </p>
          School
          <input id='edboxschool'>
          </input>
          From
          <input id='edboxfrom'>
          </input>
          To
          <input id='edboxto'>
          </input>
          GPA
          <input id='edboxgpa'>
          </input>          
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
