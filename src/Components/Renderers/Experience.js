function Experience(props){
    return(
        <ul>
            {props.propArray.map(val =>{
                return(<li key={val.id}>{val.Company + val.Role + val.Description}</li>)})}
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