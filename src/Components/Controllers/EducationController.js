import EducationRender from '../Renderers/Education.js'
import Box from '../protoBoxController.js';

class EducationBox extends Box{
    constructor(props){
        super(props)
        this.blankArray = this.state.infoToBePassedArray;
    }

    render(){
        let defaultProp;
        if(this.state.infoToBePassedArray != this.blankArray){
            defaultProp = this.state.infoToBePassedArray
        }

        return(
        <div className = 'EducationBox Controller'>
            <form className ='RemovableForm' onSubmit={event => this.submitBox(event)}>
            <p>
                Add Education
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

            <div className='Rendered Moveable'>
                <p>Education: </p>
                <EducationRender EdArray={defaultProp} deleter={this.removeElement}/>
            </div>
        </div>
        )
    }
   

}

export default EducationBox