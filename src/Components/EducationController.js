import EducationRender from './Education';
import React, {Component} from 'react';
import uniqid from 'uniqid';

class EducationBox extends Component{
    constructor(props){
        super(props)

        this.state = {
            EducationboxArray:[],
            EducationBoxProto:{
                School:'',
                From:'',
                To:'',
                TotalGPA:'',
                id: uniqid()
            }
        }
        this.submitEducationBox = this.submitEducationBox.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        
    }

    submitEducationBox(e){
        e.preventDefault();
        
        this.setState(prevState=>({
          EducationboxArray: this.state.EducationboxArray.concat(this.state.EducationBoxProto),
          EducationBoxProto:{
            ...prevState.EducationBoxProto,
            id:uniqid(),
         },
          
        }))
      }

    updateHandler(e, eventSource){

        switch (eventSource){
            case 'School':
                this.setState(prevState =>({
                    EducationBoxProto:{
                        ...prevState.EducationBoxProto,
                        School: e.target.value
                    } 
                }))
                break;
            case 'From':
                this.setState(prevState =>({
                    EducationBoxProto:{
                        ...prevState.EducationBoxProto,
                        From: e.target.value
                    }
                }))
                break;
            case 'To':
                this.setState(prevState =>({
                    EducationBoxProto:{
                        ...prevState.EducationBoxProto,
                        To: e.target.value
                    }
                }))
                break;
            case 'TotalGPA':
                this.setState(prevState =>({
                    EducationBoxProto:{
                        ...prevState.EducationBoxProto,
                        TotalGPA: e.target.value
                    }
                }))
                console.log(e.target.value);
                console.log(this.state.EducationboxProto)
                break;
            default:
                break;
        }
    }
   
    render(){
        console.log(this.state.EducationBoxProto);
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
}

export default EducationBox