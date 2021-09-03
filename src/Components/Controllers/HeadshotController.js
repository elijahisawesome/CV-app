import Box from '../protoBoxController.js';
import HeadshotRender from '../Renderers/Headshot.js';

class Headshot extends Box{
    constructor(props){
        super(props)
        this.blankProp=this.state.infoToBePassedProto;
    }
    render(){
        let propObject;
        if(this.blankProp != this.state.infoToBePassedProto){
            propObject = this.state.infoToBePassedProto;
        }
        return(
            <div className='HeadshotBox'>
                <input className='RemovableForm' type='file' accept='image/*' onChange={(e)=>{this.handleUpdate(e)}}/>
                <div className="Rendered">
                    <HeadshotRender image={propObject}/>
                </div>
            </div>
        )
    }
    handleUpdate(e){
        let file = e.target.files;
        this.setState({
            infoToBePassedProto:URL.createObjectURL(file[0]),
        })
    }

}

export default Headshot