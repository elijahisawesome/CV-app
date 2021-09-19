function UserID(props){
    return(
        <div className ='UserID'>
            <li key={props.propArray.id}>
                <div className='Content'>{props.propArray.Name}</div>
                <div className='Content'>{props.propArray.Address}</div>
                <div className='Content'>{props.propArray.Email}</div>
                <div className='Content'>{props.propArray.Phone}</div>
                <button className ='RemovableForm' onClick={()=>{props.deleter(0)}}>Delete</button>
            </li>
        </div>
    )
}
UserID.defaultProps = {
    propArray:{

    }
}

export default UserID;