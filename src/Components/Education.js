import uniqid from 'uniqid';

function EducationBox(props){
    return(
        <ul>
            {props.EdArray.map(val =>{
                return(<li key={val.id}>{val.School + val.From + val.To + val.TotalGPA}</li>)})}
        </ul>
    )

}


export default EducationBox;