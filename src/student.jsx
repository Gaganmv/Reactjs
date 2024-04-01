import PropTypes from 'prop-types'

function Student(props){
return(
    <>
    <p>Name: {props.name}</p>
    <p>Age : {props.age}</p>
    <p>Student: {props.isstudent ? "Yes" : "No"}</p>
    </>
);
}

Student.propTypes = {
    age:PropTypes.number
}

Student.defaultProps = {
    name:"Guest",
    age:0,
}
export default Student;