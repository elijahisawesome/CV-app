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
            <div className = 'ExperienceBox Controller ContentBox'>
                <form onSubmit ={this.submitBox} className ='RemovableForm'>
                <p>
                    Add Experience
                </p>
                Company
                <input onChange={event =>this.updateHandler(event, 'Company')}></input>
                Role
                <input onChange={event => this.updateHandler(event, 'Role')}></input>
                <div>
                    Description
                    <textarea onChange={event => this.updateHandler(event, 'Description')}></textarea>
                </div>
                <button>Submit</button>
                </form>
                <div className='Rendered Moveable'>
                    <p>Experience: </p>
                    <Experience propArray={defaultProp} deleter={this.removeElement}/>
                </div>
            </div>
        )
    }
}

export default ExperienceController