import Box from '../protoBoxController.js';
import Experience from '../Renderers/Experience.js';

class ExperienceController extends Box{
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
            <div className = 'ExperienceBox Controller'>
                <form onSubmit ={this.submitBox}>
                <p>
                    Experience
                </p>
                Company
                <input onChange={event =>this.updateHandler(event, 'Company')}></input>
                Role
                <input onChange={event => this.updateHandler(event, 'Role')}></input>
                Description
                <input onChange={event => this.updateHandler(event, 'Description')}></input>
                <button>Submit</button>
                </form>
                <div className='Rendered'>
                    <Experience propArray={defaultProp} deleter={this.removeElement}/>
                </div>
            </div>
        )
    }
}

export default ExperienceController