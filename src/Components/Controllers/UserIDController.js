import Box from '../protoBoxController.js';
import UserIDRenderer from '../Renderers/UserIDRenderer.js';

class UserID extends Box{


    render(){
        return(
            <div className ="UserIDBox ContentBox">
                <form className ='RemovableForm' onSubmit={(event)=>{this.submitBox(event, true)}}>
                    <p>Add Contact Info:</p>
                    Name:
                    <input type='text' onChange={(event)=>{this.updateHandler(event, 'Name')}}></input>
                    Address:
                    <input type='text' onChange={(event)=>{this.updateHandler(event, 'Address')}}></input><div></div>
                    Email:
                    <input type='email' onChange={(event)=>{this.updateHandler(event, 'Email')}}></input>
                    Phone Number:
                    <input type='tel' id='phone'required onChange={(event)=>{this.updateHandler(event, 'Phone')}}></input>
                    <button>Submit</button>
                </form>
                <div className='Rendered Moveable'>
                    <p>Contact Info: </p>
                    <UserIDRenderer propArray = {this.state.infoToBePassedArray[0]} deleter={this.removeElement}/>
                </div>
            </div>
        )
    }
}

export default UserID;