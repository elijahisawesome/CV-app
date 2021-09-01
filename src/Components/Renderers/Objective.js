function Objective(props){
    console.log(props.propArray.Objective)
    return(
        <div>
            <p>{props.propArray.Objective}</p>
            <button onClick={()=>props.deleter(0)}>Delete</button>
        </div>
    )
}

Objective.defaultProps = {
    propArray:[{
        Objective: 'Objective: ',
        id: 1
    }]
}

export default Objective;