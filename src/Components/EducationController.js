import EducationRender from './Education';
import React, {Component} from 'react';

class EducationBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            EducationboxArray:[],
            EducationboxProto:{
                School:'',
                From:'',
                To:'',
                GPA:''
            }
        }
        this.submitEducationBox = this.submitEducationBox.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        
    }

    submitEducationBox(e){
        e.preventDefault();
        let newArray = this.state.EducationboxArray.map(x=>x);
        let newObj = this.state.EducationboxProto;
        newArray.push(newObj);
        this.setState({
          EducationboxArray: newArray,
        })
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
            case 'GPA':
                this.setState(prevState =>({
                    EducationboxProto:{
                        ...prevState.EducationBoxProto,
                        GPA: e.target.value
                    }
                }))
                break;
            default:
                break;
        }
    }
    
    render(){
        return(
        <div>
            <form onSubmit={this.submitEducationBox}>
            <p>
                Education
            </p>
            School
            <input id='edboxschool' onChange={event => this.updateHandler(event, 'School')}>
            </input>
            From
            <input id='edboxfrom' onChange = {event => this.updateHandler(event, 'From')}>
            </input>
            To
            <input id='edboxto'onChange = {event => this.updateHandler(event, 'To')}>
            </input>
            GPA
            <input id='edboxgpa'onChange = {event => this.updateHandler(event, 'GPA')}>
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