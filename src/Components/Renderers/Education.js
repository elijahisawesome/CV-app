function EducationBox(props){
    return(
        <ul>
            {props.EdArray.map((val, index) =>{
                return  (<li key={val.id}>
                            <div id='School' className='Content'>School: {val.School}</div>
                            <div id='From' className='Content'>From: {val.From}</div>
                            <div id='To' className='Content'>To: {val.To}</div>
                            <div id='GPA' className='Content'>GPA: {val.TotalGPA}</div>
                            <button className ='RemovableForm' onClick={()=>{props.deleter(index)}}>Delete</button>
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
        School: '',
        From: '',
        To: '',
        TotalGPA: '',
        id: 0
    }]
}


export default EducationBox;