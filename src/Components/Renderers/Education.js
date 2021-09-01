function EducationBox(props){
    return(
        <ul>
            {props.EdArray.map((val, index) =>{
                return  (<li key={val.id}>
                            {val.School + val.From + val.To + val.TotalGPA}
                            <button onClick={()=>{props.deleter(index)}}>Delete</button>
                        </li>
                        )
                    }
                )
            }
        </ul>
    )

}
EducationBox.defaultProps = {
    EdArray:[{
        School: 'School: ',
        From: 'From: ',
        To: 'To: ',
        TotalGPA: 'GPA: ',
        id: 0
    }]
}


export default EducationBox;