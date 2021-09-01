function Experience(props){
    return(
        <ul>
            {props.propArray.map((val, index) =>{
                return(
                        <li key={val.id}>{
                            val.Company + val.Role + val.Description}
                            <button onClick={()=>{props.deleter(index)}}>Delete</button>
                        </li>
                    
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