import EducationRender from '../Renderers/Education.js'
import Box from '../protoBoxController.js';

class EducationBox extends Box{
    constructor(props){
        super(props)
        this.defaultArray = [{
            School: 'School: ',
            From: 'From: ',
            To: 'To: ',
            TotalGPA: 'GPA: ',
            id: 1
        }]
        this.blank = this.state.infoToBePassedArray;

    }
    render(){
        let defaultProp;
        if(this.state.infoToBePassedArray == this.blank){
            defaultProp = this.defaultArray;
        }
        else 
        {  
            defaultProp = this.state.infoToBePassedArray
        };
        return(
        <div>
            <form onSubmit={event => this.submitBox(event)}>
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

            <div className='Rendered'>
                <EducationRender EdArray={defaultProp}/>
            </div>
        </div>
        )
    }
   

}

export default EducationBox