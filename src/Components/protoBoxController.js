import EducationRender from './Education';
import React, {Component} from 'react';
import uniqid from 'uniqid';

class Box extends Component{
    constructor(props){
        super(props)

        this.state = {
            infoToBePassedArray:[],
            infoToBePassedProto:{
                id: uniqid(),
            }
        }
        this.submitBox = this.submitBox.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        
    }

    submitBox(e){
        e.preventDefault();
        
        this.setState(prevState=>({
          infoToBePassedArray: this.state.infoToBePassedArray.concat(this.state.infoToBePassedProto),
          infoToBePassedProto:{
            ...prevState.infoToBePassedProto,
            id:uniqid(),
         },
          
        }))
      }

    updateHandler(e, eventSource){
        this.setState(prevState=>({
            infoToBePassedProto:{
                ...prevState.infoToBePassedProto,
                [eventSource]: e.target.value,
            }
        }))
    }

}
   /*
    render(){
        return(
        <div>
            <form onSubmit={event => this.submitEducationBox(event)}>
            <p>
                Education
            </p>
            School
            <input id='edboxschool' onChange = {event => this.updateHandler(event, 'School')}>
            </input>
            From
            <input id='edboxfrom' onChange = {event => this.updateHandler(event, 'From')}>
            </input>
            To
            <input id='edboxto'onChange = {event => this.updateHandler(event, 'To')}>
            </input>
            GPA
            <input id='edboxgpa'onChange = {event => this.updateHandler(event, 'TotalGPA')}>
            </input>          
            <button>Submit</button>
            </form>

            <div>
                <EducationRender EdArray={this.state.EducationboxArray}/>
            </div>
        </div>
        )
    }
}*/

export default Box