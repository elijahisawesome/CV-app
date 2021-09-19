import './App.css';
import React, {Component, useRef} from 'react';
import Skills from './Components/Controllers/SkillsController.js';
import Education from './Components/Controllers/EducationController.js';
import Experience from './Components/Controllers/ExperienceController.js';
import Headshot from './Components/Controllers/HeadshotController.js';
import Objectives from './Components/Controllers/ObjectiveController.js';
import UserID from './Components/Controllers/UserIDController.js';

import {useReactToPrint} from 'react-to-print';



class App extends Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div className="CV" id='CV'>
        <Headshot/>
        <UserID/>
        <Education/>
        <Experience/>
        <Skills/>
        <Objectives/>
        <button onClick={this.togglePrint}>Ready To Print</button>
      </div>
    )
  }

  togglePrint(){
    let doc = document.getElementById('CV');
    doc.classList.toggle('Printing');

    let forms = document.getElementsByClassName('RemovableForm');
    Array.from(forms).forEach(e => {
      e.classList.toggle('Printing');
    });

    let rendered = document.getElementsByClassName('Rendered');
    Array.from(rendered).forEach(e=>{
      e.classList.toggle('Printing');
    })
  }

}

const PrintableCV = function(props){
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: ()=>{
      return componentRef.current
    }
  })
  return(
    <div>
      <App ref={componentRef}/>
      <button className='PrintButton' onClick = {handlePrint}>Print this thing</button>
    </div>
  )

}


export default PrintableCV;
