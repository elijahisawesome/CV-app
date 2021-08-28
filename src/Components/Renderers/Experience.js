function Experience(props){
    return(
        <ul>
            {props.propArray.map(val =>{
                return(<li key={val.id}>{val.Company + val.Role + val.Description}</li>)})}
        </ul>
    )
}

export default Experience;