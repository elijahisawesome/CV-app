function Skills(props){
    return(
        <div>
            {props.propArray.map(val =>{
                return(<li key={val.id}>{val.Skill}</li>)})}
        </div>
    )
}

Skills.defaultProps = {
    propArray:[{
        Skill: 'Skill: ',
        id: 1
    }]
}

export default Skills;