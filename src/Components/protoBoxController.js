import React, {Component} from 'react';
import uniqid from 'uniqid';

class Box extends Component{
    constructor(props){
        super(props)

        this.state = {
            infoToBePassedArray:[],
            infoToBePassedProto:{
                id: uniqid(),
            }
        }
        this.submitBox = this.submitBox.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        
    }

    submitBox(e, passSingleObjectFromArray){
        e.preventDefault();
        if(!passSingleObjectFromArray){
        this.setState(prevState=>({
          infoToBePassedArray: this.state.infoToBePassedArray.concat(this.state.infoToBePassedProto),
          infoToBePassedProto:{
            ...prevState.infoToBePassedProto,
            id:uniqid(),
         },
          
        }))}
        else{
            this.setState(prevState =>({
                infoToBePassedArray: [this.state.infoToBePassedProto],
            }))
        }
      }

    updateHandler(e, eventSource){
        this.setState(prevState=>({
            infoToBePassedProto:{
                ...prevState.infoToBePassedProto,
                [eventSource]: e.target.value,
            }
        }))
    }

}

export default Box