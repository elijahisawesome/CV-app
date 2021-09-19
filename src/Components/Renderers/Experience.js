function Experience(props){
    return(
        <ul>
            {props.propArray.map((val, index) =>{
                return(
                        <div key={val.id}>
                            <div >
                                <div className='Content'>{val.Company}</div>
                                <div className='Content'>{val.Role}</div>
                                <div className='Content Description'>{val.Description}</div>

                            </div>
                            <button className ='RemovableForm' onClick={()=>{props.deleter(index)}}>Delete</button>
                        </div>
                    )}
                )
            }
        </ul>
    )
}
Experience.defaultProps = {
    propArray:[{
        Company: 'Company: ',
        Role: 'Role: ',
        Description: 'Description: ',
        id: 1
    }]
}

export default Experience;