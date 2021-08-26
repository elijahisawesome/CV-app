function EducationBox(props){
    const {School, From, To, GPA} = props.props;
    return(
        <div>
            <p>EDUCATION</p>
            <p>{School}</p>
            <p>{From}</p>
            <p>{To}</p>
            <p>{GPA}</p>
        </div>
    )
}


export default EducationBox;