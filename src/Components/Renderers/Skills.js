function Skills(props){
    return(
        <div>
            {props.propArray.map(val =>{
                return(<li key={val.id}>{val.Skill}</li>)})}
        </div>
    )
}

export default Skills;