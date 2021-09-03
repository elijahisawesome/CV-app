import SkillRenderer from '../Renderers/Skills.js';
import Box from '../protoBoxController.js';

class SkillBox extends Box{
    constructor(props){
        super(props)
        this.defaultArray = this.state.infoToBePassedArray
    }
    render(){
        let propArray;
        if(this.state.infoToBePassedArray != this.defaultArray){
            propArray = this.state.infoToBePassedArray;
        }

        return(
            <div className = "SkillBox Controller">
                <form className ='RemovableForm' onSubmit={this.submitBox}>
                Add Skill
                <input onChange={event => this.updateHandler(event, 'Skill')}></input>
                <button>Submit</button>
                </form>
                
                <div className='Rendered Moveable'>
                    Skills: 
                    <SkillRenderer propArray = {propArray} deleter={this.removeElement}/>
                </div>
            </div>
        )
    }
}

export default SkillBox