import SkillRenderer from '../Renderers/Skills.js';
import Box from '../protoBoxController.js';

class SkillBox extends Box{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitBox}>

                Add Skill
                <input onChange={event => this.updateHandler(event, 'Skill')}></input>
                <button>Submit</button>
                </form>
                
                <div className='Rendered'>
                    <SkillRenderer propArray = {this.state.infoToBePassedArray}/>
                </div>
            </div>
        )
    }
}

export default SkillBox