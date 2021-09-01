function Skills(props){
    return(
        <div>
            {props.propArray.map((val, index) =>{
                return(
                <li key={val.id}>{
                    val.Skill}
                    <button onClick={()=>{props.deleter(index)}}>Delete</button>
                </li>)})}
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