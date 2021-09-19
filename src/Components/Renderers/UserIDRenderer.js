function UserID(props){
    return(
        <div className ='UserID'>
            <div key={props.propArray.id}>
                <div className='Content'>{props.propArray.Name}</div>
                <div className='Content'>{props.propArray.Address}</div>
                <div className='Content'>{props.propArray.Email}</div>
                <div className='Content'>{props.propArray.Phone}</div>
            </div>
            <button className ='RemovableForm' onClick={()=>{props.deleter(0)}}>Delete</button>
        </div>
    )
}
UserID.defaultProps = {
    propArray:{

    }
}

export default UserID;