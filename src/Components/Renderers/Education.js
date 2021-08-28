function EducationBox(props){
    return(
        <ul>
            {props.EdArray.map(val =>{
                return(<li key={val.id}>{val.School + val.From + val.To + val.TotalGPA}</li>)})}
        </ul>
    )

}
EducationBox.defaultProps = {
    EdArray:[{
        School: 'School: ',
        From: 'From: ',
        To: 'To: ',
        TotalGPA: 'GPA: '
    }]
}


export default EducationBox;