import Box from '../protoBoxController.js';
import ObjectiveRenderer from '../Renderers/Objective.js';

class ObjectiveBox extends Box{
    constructor(props){
        super(props)
        this.defaultArray = this.state.infoToBePassedArray
    }
    render(){
        let propArray = [];
        if(this.state.infoToBePassedArray != this.defaultArray){
            propArray = this.state.infoToBePassedArray;
        }

        return(
            <div className="ObjectiveBox Controller ContentBox">
                <form className ='RemovableForm' onSubmit={(event)=>{this.submitBox(event, true)}}>

                Add Objective
                <textarea onChange={event => this.updateHandler(event, 'Objective')}></textarea>
                <button>Submit</button>
                </form>    
                <div className='Rendered Moveable'>
                    <p>Objective: </p>
                    <ObjectiveRenderer propArray = {propArray[0]} deleter={this.removeElement}/>
                </div>
            </div>
        )
    }
}

export default ObjectiveBox