function Experience(props){
    return(
        <div>
            {props.propArray.map(val =>{
                return(<li key={val.id}>{val.Company + val.Role + val.Description}</li>)})}
        </div>
    )
}

export default Experience;