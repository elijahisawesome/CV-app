import defaultImage from "../../Images/defaultPFP.jpeg"

function Headshot(props){

    return(
        <div>
            <img className='Headshot' src={props.image}/>
        </div>
    )
}

Headshot.defaultProps = {
    image:defaultImage,
}

export default Headshot;