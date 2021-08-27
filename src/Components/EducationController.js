import EducationRender from './Education';
import Box from './protoBoxController';

class EducationBox extends Box{
    constructor(props){
        super(props)

    }
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
                <EducationRender EdArray={this.state.infoToBePassedArray}/>
            </div>
        </div>
        )
    }
   

}

export default EducationBox