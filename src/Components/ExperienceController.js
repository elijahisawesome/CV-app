import Box from './protoBoxController.js';
import Experience from './Experience.js';

class ExperienceController extends Box{
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <div>
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
                <Experience propArray={this.state.infoToBePassedArray}/>
            </div>
        )
    }
}

export default ExperienceController