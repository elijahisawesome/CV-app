function EducationBox(props){

    return(
        <div>
            {props.EdArray.map(val =>{
                return(<div>{val.School + val.From + val.To + val.GPA}</div>)})}
        </div>
    )

}


export default EducationBox;